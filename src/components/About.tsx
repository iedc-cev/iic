import { Target, Lightbulb, Rocket, Award, Zap } from "lucide-react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className="container">
        <div className={styles.bentoGrid}>
          


          {/* Cell 2: Vision (Tall, 1x2) */}
          <div className={`${styles.bentoCell} ${styles.cellVision} ${styles.flipCard}`}>
            <div className={styles.flipper}>
              <div className={styles.front}>
                <div className={styles.watermark}>01</div>
                <div className={styles.frontContent}>
                  <div className={styles.iconWrapperOrange}>
                    <Lightbulb size={32} />
                  </div>
                  <h3 className={styles.frontTitle}>Vision</h3>
                </div>
              </div>
              <div className={`${styles.back} ${styles.bgVision}`}>
                <h3 className={styles.cellTitle}>Vision</h3>
                <p className={styles.cellText}>
                  To be a leading hub for student entrepreneurs, providing the resources, mentorship, pre-incubation, and platform needed to build successful startups.
                </p>
              </div>
            </div>
          </div>



          {/* Cell 4: Mission (Small, 1x1) */}
          <div className={`${styles.bentoCell} ${styles.cellMission} ${styles.flipCard}`}>
            <div className={styles.flipper}>
              <div className={styles.front}>
                <div className={styles.watermark}>02</div>
                <div className={styles.frontContent}>
                  <div className={styles.iconWrapperBlue}>
                    <Target size={32} />
                  </div>
                  <h3 className={styles.frontTitle}>Mission</h3>
                </div>
              </div>
              <div className={`${styles.back} ${styles.bgMission}`}>
                <h3 className={styles.cellTitle}>Mission</h3>
                <p className={styles.cellText}>
                  Systematically foster the culture of innovation, encouraging students to transform ideas into viable products.
                </p>
              </div>
            </div>
          </div>

          {/* Cell 5: Approach (Wide, 4x1) */}
          <div className={`${styles.bentoCell} ${styles.cellApproach} ${styles.flipCard}`}>
             <div className={styles.flipper}>
               <div className={styles.front}>
                 <div className={styles.watermark}>03</div>
                 <div className={styles.frontContent}>
                   <div className={styles.iconWrapperRed}>
                     <Rocket size={36} />
                   </div>
                   <h3 className={styles.frontTitle}>Our Approach</h3>
                 </div>
               </div>
               <div className={`${styles.back} ${styles.bgApproach} ${styles.approachBack}`}>
                 <div className={styles.approachContent}>
                   <h3 className={styles.cellTitle}>Our Approach</h3>
                   <p className={styles.cellText}>
                     Through workshops, hackathons, ideathons, and prototype grants, we provide an end-to-end pathway for cognitive development and venture creation.
                   </p>
                   <div className={styles.featureList}>
                     <span className={styles.featureItem}><Zap size={16} className={styles.featureIcon} /> Hackathons</span>
                     <span className={styles.featureItem}><Zap size={16} className={styles.featureIcon} /> Incubation</span>
                     <span className={styles.featureItem}><Zap size={16} className={styles.featureIcon} /> Mentorship</span>
                     <span className={styles.featureItem}><Zap size={16} className={styles.featureIcon} /> Funding</span>
                   </div>
                 </div>
               </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
