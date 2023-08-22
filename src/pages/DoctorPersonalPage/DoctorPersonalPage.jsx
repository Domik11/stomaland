import React, { useState } from 'react';
import styles from './DoctorPersonalPage.module.scss';
import { stuff } from '../../components/data';

import { useParams } from 'react-router-dom';

import account_img from '../../assets/images/control-key.svg';

function DoctorPersonalPage({ openModal }) {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [])

	const { path } = useParams();

	const doctor = stuff.find((person) => person.path === path);

	//Стрелка для образования
	const [showEducation, setShowEducation] = useState(true);
	const [educationAnimation, setEducationAnimation] = useState(true);

	const toggleEducation = () => {
		setEducationAnimation(true);
		setTimeout(() => {
			setShowEducation(!showEducation);
			setEducationAnimation(true);
		}, 300);
	};

	const arrowClass = showEducation ? `${styles.arrow} ${styles.rotate}` : styles.arrow;

	//стрелка для курсов
	const [showCurs, setShowCurs] = useState(true);
	const [cursAnimation, setCursAnimation] = useState(false);

	const toggleCurs= () => {
		setCursAnimation(true);
		setTimeout(() => {
			setShowCurs(!showCurs);
			setCursAnimation(true);
		}, 300);
	};

	const arrowClassCurs = showCurs ? `${styles.arrow} ${styles.rotate}` : styles.arrow;


	return (
		<div className={styles.wrapper}>
			<div className={styles.img_side}>
				<img className={styles.main_image} src={doctor.img_full} alt="" />

				<div className={styles.img_btns}>
					<div className={styles.position}>{doctor.position}</div>
					<div className={styles.calendar}>
						<div className={styles.calendar_days}>
							{doctor.schedule_days.map((item, index) => {
								return <p key={index}>{item}</p>;
							})}
						</div>

						<div className={styles.calendar_times}>
							{doctor.schedule_time.map((item, index) => {
								return <p key={index}>{item}</p>;
							})}
						</div>
					</div>

					<button className={styles.btn} onClick={() => { openModal(null, doctor.name) }}>Записаться</button>
				</div>
			</div>
			<div className={styles.text_side}>
				<div className={styles.text}>
					<h3 className={styles.department}>{doctor.department}</h3>
					<h1 className={styles.name}>{doctor.name}</h1>
					<h3 className={styles.spec}>{doctor.specialization}</h3>
					<p className={styles.experience}>
						Стаж профессиональной деятельности: {doctor.experience}
					</p>
					<h4 className={styles.edu_title}>
						Образование
						<span className={styles.arrowContainer} onClick={toggleEducation}>
							<img
								className={arrowClass}
								src={account_img}
								alt="Стрелочка"
								width={24}
								height={24}
							/>
						</span>
					</h4>
					{showEducation && (
						<div className={`${styles.edu_items} ${educationAnimation ? styles.show : ''}`}>
							{doctor.education_years.map((item, index) => {
								return (
									<div key={index} className={styles.edu_item}>
										<h3>{item}</h3>
										<p className={styles.edu_text}>{doctor.education[index]}</p>
									</div>
								);
							})}
						</div>
					)}
					{doctor.courses && (
						<>
							<h4 className={styles.edu_title}>
								Курсы повышения квалификации:
								<span className={styles.arrowContainer} onClick={toggleCurs}>
									<img
										className={arrowClassCurs}
										src={account_img}
										alt="Стрелочка"
										width={24}
										height={24}
									/>
								</span>
							</h4>
							{showCurs && (<ul className={`${styles.courses_list} ${cursAnimation ? styles.show : ''}`}>
								{doctor.courses.map((course, index) => {
									return <li key={index} className={styles.courses_item}>{course}</li>;
								})}
							</ul>)}
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default DoctorPersonalPage;
