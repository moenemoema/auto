import React from 'react';
import s from "./Logo.module.scss";
import cn from "classnames";
import { motion } from 'framer-motion'

const Logo = ({ classNameTitlesOfHeader }) => {
  return (
    <motion.div
      initial="hidden"
      transition={{ duration: 0.7 }}
      whileInView="visible"
      variants={{
        hidden: { scale: 0 },
        visible: { scale: 1 },
      }}
      className={s.container}>
      <svg
        className={s.logo}
        viewBox="0 0 71 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M62.7469 0H23.9376L17.1826 11.9947H30.5823L23.0166 25.1324L36.4387 25.123L43.9992 11.9947H55.8475L62.7469 0Z"
          fill="#00A3A9"
        />
        <path
          d="M28.9264 7.8374H2.34085L0 11.9945H26.5351L28.9264 7.8374Z"
          fill="#00A3A9"
        />
        <path
          d="M0.0932617 18.2168L19.498 52.0766L33.1865 51.9726L26.4865 40.282L41.5635 40.3141L34.8443 28.6085L19.7782 28.5764L13.8541 18.2389L0.0932617 18.2168Z"
          fill="#049393"
        />
        <path
          d="M23.7412 43.8057L37.0341 67.0004L41.7782 66.9646L28.5105 43.8133L23.7412 43.8057Z"
          fill="#049393"
        />
        <path
          d="M47.5344 63.8339L66.9389 29.9744L60.0055 18.0834L53.3058 29.7743L45.7948 16.6045L39.0918 28.3192L46.5972 41.4798L40.6729 51.8171L47.5344 63.8339Z"
          fill="#33B7BC"
        />
        <path
          d="M57.7075 30.4075L71.0002 7.21302L68.5973 3.0918L55.3296 26.2428L57.7075 30.4075Z"
          fill="#33B7BC"
        />
      </svg>

      <svg
        className={cn(s.titleFirst, classNameTitlesOfHeader)}
        viewBox="0 0 147 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48.323 28.7743V0.431868H53.5107V28.7743H48.323ZM89.6061 28.7743V0.431868H94.7938V28.7743H89.6061ZM124.322 5.48223H115.465V28.7743H110.277V5.48223H101.991L99.0514 0.431868H127.466L134.31 13.1363L141.155 0.431868H147L136.923 18.9951L136.883 28.7743H131.697V19.0732L124.322 5.48246L124.322 5.48223ZM15.9649 5.48223V28.7743H10.7772V5.48223H2.6249L-0.189941 0.431868H33.5877C36.1921 0.431868 38.7464 1.05605 40.6696 2.92426C42.5073 4.70912 43.242 7.01979 43.242 9.56684C43.242 11.6865 42.73 13.7111 41.3595 15.3534C40.1351 16.8206 38.5048 17.6782 36.7004 18.1248L44.9428 28.7743H38.5273L30.747 18.5053H27.1369V28.7743H21.949V13.7141C25.6732 13.7141 29.3968 13.7701 33.1208 13.7701C34.4005 13.7701 35.8226 13.5405 36.802 12.6356C37.6736 11.8306 38.0153 10.7865 38.0153 9.60669C38.0153 8.4378 37.6799 7.3953 36.8045 6.59965C35.8221 5.70676 34.3951 5.48269 33.1208 5.48269C27.4021 5.48269 21.6837 5.48269 15.9651 5.48269L15.9649 5.48223ZM66.6138 9.21228L66.5506 28.7741H61.3626V5.482V5.42234L58.4559 0.431641H67.1479L79.7195 20.0494L79.7625 0.431641H84.9504V28.7738H79.1266L66.6136 9.21205L66.6138 9.21228Z"
          fill="#FEFEFE"
        />
      </svg>

      <svg
        className={cn(s.titleSecond, classNameTitlesOfHeader)}
        viewBox="0 0 128 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.89857 7.75871L5.29742 6.05855H2.41391L1.80262 7.75871H0.26416L2.93356 0.54546H4.77754L7.44694 7.75871H5.89835H5.89857ZM2.91329 4.65694H4.7879L3.85082 2.03953L2.91352 4.65694H2.91329ZM12.409 0.545232H13.8865V4.8423C13.8865 5.82445 13.615 6.57684 13.0714 7.09877C12.5282 7.62093 11.8185 7.88213 10.9422 7.88213C10.0659 7.88213 9.35622 7.62116 8.81271 7.09877C8.26942 6.57684 7.99789 5.82445 7.99789 4.8423V0.545232H9.4751V4.75987C9.4751 5.90712 9.96436 6.48074 10.9424 6.48074C11.9205 6.48074 12.4095 5.90712 12.4095 4.75987V0.545232H12.409ZM20.458 0.545232V1.94662H18.3999V7.75848H16.9429V1.94662H14.8949V0.545232H20.4578H20.458ZM22.2054 1.49323C22.9153 0.778648 23.7965 0.421354 24.8493 0.421354C25.9024 0.421354 26.7854 0.778648 27.4985 1.49323C28.2118 2.20759 28.5684 3.09387 28.5684 4.15186C28.5684 5.20984 28.2118 6.09613 27.4985 6.81048C26.7854 7.52507 25.9024 7.88236 24.8493 7.88236C23.7965 7.88236 22.9153 7.52507 22.2054 6.81048C21.4957 6.09613 21.1406 5.20984 21.1406 4.15186C21.1406 3.09387 21.4957 2.20759 22.2054 1.49323ZM26.454 2.48244C26.0294 2.04272 25.4946 1.82297 24.8491 1.82297C24.2038 1.82297 23.6691 2.04272 23.2445 2.48244C22.8201 2.92194 22.6075 3.47849 22.6075 4.15186C22.6075 4.825 22.8201 5.38154 23.2445 5.82127C23.6691 6.26099 24.2038 6.48074 24.8491 6.48074C25.4946 6.48074 26.0294 6.26099 26.454 5.82127C26.8784 5.38154 27.0907 4.82522 27.0907 4.15186C27.0907 3.47872 26.8784 2.92194 26.454 2.48244ZM36.9636 7.75848L35.1194 5.16179H34.3147V7.75848H32.8578V3.87358C33.8257 3.87358 34.7936 3.87358 35.7615 3.87358C36.1348 3.87358 36.4151 3.78955 36.602 3.62127C36.7889 3.45299 36.8821 3.21775 36.8821 2.91534C36.8821 2.61316 36.7871 2.3761 36.5968 2.2044C36.4066 2.0327 36.1281 1.94685 35.7615 1.94685C34.797 1.94685 33.8441 1.92316 32.8578 1.92316V0.545232H35.9245C36.6853 0.545232 37.2813 0.756558 37.7127 1.17898C38.1441 1.60163 38.3596 2.17343 38.3596 2.89484C38.3596 3.47188 38.2204 3.94235 37.9419 4.30647C37.6634 4.67037 37.2694 4.9179 36.7599 5.04839L38.7569 7.75848H36.9636ZM44.5947 1.94662H41.2631V3.39947H44.3198V4.80086H41.2631V6.35686H44.5947V7.75825H39.8061V0.545004H44.5947V1.94639V1.94662ZM50.3513 0.545232H51.8083V7.75848H50.1273L47.0301 2.70925L47.1625 4.73914V7.75848H45.7056V0.545232H47.3764L50.4837 5.59446L50.3513 3.56457V0.545232ZM58.3798 0.545232V1.94662H56.3217V7.75848H54.8647V1.94662H52.8167V0.545232H58.3796H58.3798ZM63.6983 7.75848L63.0972 6.05832H60.2136L59.6024 7.75848H58.0639L60.7333 0.545232H62.5773L65.2467 7.75848H63.6981H63.6983ZM60.713 4.65671H62.5876L61.6506 2.0393L60.7133 4.65671H60.713ZM67.7636 6.35686H70.8203V7.75825H66.3067V0.545004H67.7636V6.35686ZM79.3583 3.87335C79.7318 3.997 80.0137 4.21881 80.2039 4.53807C80.3942 4.85756 80.4892 5.23694 80.4892 5.67667C80.4892 6.32931 80.2735 6.8394 79.8423 7.20671C79.411 7.57425 78.8251 7.75802 78.0846 7.75802H74.9365V3.39924L77.9115 3.39902C78.4887 3.39902 78.7774 3.15535 78.7774 2.66735C78.7774 2.40638 78.7047 2.22079 78.5585 2.11103C78.4124 2.00127 78.1832 1.94616 77.8709 1.94616C76.8929 1.94616 75.9148 1.94616 74.9365 1.94616V0.544777H78.0643C78.7366 0.544777 79.2682 0.70623 79.6589 1.02914C80.0493 1.35204 80.2447 1.81591 80.2447 2.42028C80.2447 3.08658 79.9491 3.57095 79.3583 3.87313V3.87335ZM78.054 6.35686C78.4075 6.35686 78.6551 6.28809 78.7979 6.15077C78.9404 6.01323 79.012 5.81398 79.012 5.55301C79.012 5.27815 78.9404 5.07548 78.7979 4.945C78.6551 4.81452 78.4039 4.74917 78.0438 4.74917H76.3933V6.35663H78.0537L78.054 6.35686ZM82.4097 1.493C83.1196 0.77842 84.0009 0.421126 85.0537 0.421126C86.1067 0.421126 86.9898 0.77842 87.7028 1.493C88.4161 2.20736 88.7728 3.09364 88.7728 4.15163C88.7728 5.20961 88.4161 6.0959 87.7028 6.81026C86.9898 7.52484 86.1067 7.88213 85.0537 7.88213C84.0009 7.88213 83.1196 7.52484 82.4097 6.81026C81.7001 6.0959 81.345 5.20961 81.345 4.15163C81.345 3.09364 81.7001 2.20736 82.4097 1.493ZM86.6584 2.48222C86.2337 2.04249 85.699 1.82274 85.0535 1.82274C84.4082 1.82274 83.8735 2.04249 83.4488 2.48222C83.0244 2.92172 82.8119 3.47826 82.8119 4.15163C82.8119 4.82477 83.0244 5.38131 83.4488 5.82104C83.8735 6.26076 84.4082 6.48052 85.0535 6.48052C85.699 6.48052 86.2337 6.26076 86.6584 5.82104C87.0828 5.38131 87.2951 4.825 87.2951 4.15163C87.2951 3.47849 87.0828 2.92172 86.6584 2.48222ZM94.4168 0.544777H95.8943V4.84184C95.8943 5.824 95.6228 6.57639 95.0792 7.09832C94.5359 7.62048 93.8263 7.88167 92.95 7.88167C92.0737 7.88167 91.364 7.62071 90.8205 7.09832C90.2772 6.57639 90.0057 5.824 90.0057 4.84184V0.544777H91.4829V4.75941C91.4829 5.90666 91.9722 6.48029 92.9502 6.48029C93.9283 6.48029 94.4173 5.90666 94.4173 4.75941V0.544777H94.4168ZM102.466 0.544777V1.94616H100.408V7.75802H98.9507V1.94616H96.9027V0.544777H102.466H102.466ZM103.526 7.75802V0.544777H104.983V7.75802H103.526ZM113.643 4.1514C113.643 5.18183 113.303 6.05081 112.624 6.75856L113.643 8.12921L112.532 8.97405L111.473 7.56241C110.99 7.77555 110.474 7.8819 109.924 7.8819C108.871 7.8819 107.99 7.52461 107.28 6.81003C106.57 6.09567 106.215 5.20939 106.215 4.1514C106.215 3.09342 106.57 2.20713 107.28 1.49278C107.99 0.778192 108.871 0.420898 109.924 0.420898C110.977 0.420898 111.86 0.778192 112.573 1.49278C113.286 2.20713 113.643 3.09342 113.643 4.1514H113.643ZM108.319 2.48199C107.895 2.92149 107.682 3.47803 107.682 4.1514C107.682 4.82454 107.895 5.38108 108.319 5.82081C108.744 6.26054 109.279 6.48029 109.924 6.48029C110.569 6.48029 111.104 6.26054 111.529 5.82081C111.953 5.38108 112.166 4.82477 112.166 4.1514C112.166 3.47826 111.953 2.92149 111.529 2.48199C111.104 2.04226 110.569 1.82251 109.924 1.82251C109.279 1.82251 108.744 2.04226 108.319 2.48199ZM119.287 0.544549H120.765V4.84162C120.765 5.82377 120.493 6.57616 119.95 7.09809C119.406 7.62025 118.697 7.88144 117.82 7.88144C116.944 7.88144 116.234 7.62048 115.691 7.09809C115.148 6.57616 114.876 5.82377 114.876 4.84162V0.544549H116.353V4.75918C116.353 5.90644 116.843 6.48006 117.821 6.48006C118.799 6.48006 119.288 5.90644 119.288 4.75918V0.544549H119.287ZM127.051 1.94594H123.719V3.39879H126.776V4.80017H123.719V6.35618H127.051V7.75757H122.262V0.544321H127.051V1.94571V1.94594Z"
          fill="#FEFEFE"
        />
      </svg>
    </motion.div>
    //   logo

  );
};

export default Logo;