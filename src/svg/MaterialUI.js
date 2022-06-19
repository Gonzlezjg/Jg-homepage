import React from 'react'

const MaterialUI = ({ size = 30 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      ariaHidden="true"
      className="iconify iconify--logos"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 256 204"
    >
      <path
        fill="#00B0FF"
        d="M0 110.848V0l96 55.424v36.949L32 55.424v73.899z"
      ></path>
      <path
        fill="#0081CB"
        d="M96 55.424L192 0v110.848l-64 36.949-32-18.474 64-36.95V55.424L96 92.373z"
      ></path>
      <path fill="#00B0FF" d="M96 129.323v36.949l64 36.949v-36.949z"></path>
      <path
        fill="#0081CB"
        d="M160 203.221l96-55.424V73.9l-32 18.474v36.95l-64 36.949v36.95zm64-147.797v-36.95L256 0v36.95l-32 18.474z"
      ></path>
    </svg>
  )
}

export default MaterialUI
