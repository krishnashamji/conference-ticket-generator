import Image from "next/image";


export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Bottom Curve */}
      <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" width="825" height="400" fill="none" viewBox="0 0 825 400"><g clip-path="url(#a)"><path fill="url(#b)" d="M-791.563 8.31c-5.988 30.729-.137 65.818 16.801 92.103 42.5 65.969 136.343 62.002 203.798 49.868 142.151-25.553 277.439-81.568 420.25-106.115 131.868-22.67 284.639-26.17 385.784 76.258 92.128 93.292 129.342 240.735 61.874 358.131-37.981 66.045-137.429 158.86-222.113 122.097-67.021-29.105-16.29-117.43 13.466-154.874 61.46-77.34 155.186-131.24 251.056-152.204 132.92-29.02 282.906 6.216 390.384 89.359 45.436 35.188 90.659 82.604 113.675 136.378 4.594 10.701 30.014 10.011 24.208-3.54-69.29-161.963-269.955-249.525-435.595-251.283-108.654-1.175-216.738 37.554-301.471 105.35C78.717 411.333 8.489 482.634 16.847 556.155c8.245 72.653 98.838 78.553 153.388 60.516 96.411-31.865 169.822-126.343 184.741-225.484 19.279-128.174-54.658-266.235-165.169-330.643C69.332-9.684-81.515 7.798-211.77 35.442c-82.782 17.58-164.075 41.433-245.439 64.516-73.773 20.905-160.151 53.234-237.638 33.004-53.178-13.863-81.737-64.998-71.366-118.222 2.399-12.308-22.977-18.6-25.35-6.43Z" /></g><defs><linearGradient id="b" x1="-654" x2="940" y1="83.5" y2="476" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0" /><stop offset=".48" stop-color="#F37362" /><stop offset=".905" stop-color="#fff" stop-opacity="0" /></linearGradient><clipPath id="a"><path fill="#fff" d="M-421 0H825v476H-421z" /></clipPath></defs></svg>
      {/* Top right squiggly */}
      <svg className="absolute top-0 right-0" width="447" height="208" viewBox="0 0 447 208" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_464)">
          <mask id="mask0_1_464" maskUnits="userSpaceOnUse" x="0" y="0" width="447" height="208">
            <path d="M0.953369 0H446.953V208H0.953369V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_1_464)">
            <path
              d="M19.1753 23.6749C86.0523 19.7749 153.348 18.2089 220.308 20.2949C257.493 21.4529 300.6 20.5419 335.963 33.8429C368.987 46.2649 316.957 79.9109 304.165 89.0459C282.9 104.236 157.313 177.416 233.296 202.447C269.269 214.297 315.633 200.443 351.294 193.723C403.853 183.82 458.484 170.602 512.319 174.363C529.415 175.558 574.416 180.409 570.261 205.171C567.257 223.074 544.089 237.621 530.612 247.091C514.294 258.557 451.103 282.874 468.709 310.582C476.953 323.558 496.127 327.601 510.102 329.168C542.914 332.846 574.157 323.813 606.213 318.634C624.96 315.606 777.54 302.839 759.564 345.896C750.902 366.64 721.954 380.583 703.819 391.462C689.625 399.978 665.468 410.168 658.416 426.568C645.35 456.946 695.207 462.218 712.812 460.975C761.536 457.537 808.968 442.019 857.044 434.146C879.527 430.465 903.796 426.738 926.311 432.071C940.925 435.532 963.037 442.895 961.459 461.343C960.446 473.195 949.615 483.925 941.19 491.112C919.229 509.845 892.394 532.523 892.906 564.552C893.527 603.419 941.886 611.816 971.878 612.176C1029.46 612.866 1088.04 604.397 1145.02 596.989C1193.06 590.744 1240.98 583.54 1288.76 575.587C1296.85 574.242 1304.94 572.884 1313.02 571.46C1321.09 570.037 1308.42 558.451 1302.46 559.503C1216.71 574.625 1130.19 587.317 1043.48 595.324C1012.58 598.177 899.53 619.184 909.556 562.411C912.303 546.857 922.242 532.097 932.74 520.641C945.198 507.05 962.91 498.57 972.219 482.08C993.869 443.725 940.376 421.638 910.64 418.183C864.551 412.826 815.781 427.93 771.157 437.434C747.787 442.411 723.873 448.117 699.911 449.077C693.717 449.326 682.293 450.668 676.906 446.789C666.485 439.285 677.875 428.825 684.357 423.458C702.224 408.664 724.213 399.116 743.214 385.879C755.934 377.017 777.689 361.967 777.651 344.258C777.572 309.267 713.213 303.887 690.043 302.194C659.718 299.978 628.925 301.561 598.882 306.156C565.33 311.288 529.443 324.084 495.332 315.629C461.865 307.333 500.255 285.559 513.248 277.659C531.248 266.715 549.572 255.494 565.221 241.28C589.976 218.792 594.131 193.305 561.379 176.414C520.744 155.458 470.949 160.529 427.359 166.581C376.569 173.634 326.652 186.889 275.647 192.335C264.671 193.507 233.008 199.021 225.745 187.043C219.067 176.025 235.852 160.843 242.648 154.576C270.383 129.01 304.309 111.038 333.838 87.7359C349.035 75.7459 376.015 54.4769 356.397 34.7419C337.402 15.6349 300.05 14.2849 275.197 11.8049C194.118 3.70989 111.461 6.65189 30.1933 10.5019C24.1213 10.7889 18.0493 11.0859 11.9803 11.4399C1.79932 12.0339 12.9483 24.0379 19.1753 23.6749Z"
              fill="url(#paint0_linear_1_464)"
            />
          </g>
        </g>
        <defs>
          <linearGradient id="paint0_linear_1_464" x1="161.341" y1="-3.40612" x2="1315.85" y2="661.838" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="0.48" stopColor="#F37362" />
            <stop offset="0.905" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_1_464">
            <rect width="446" height="208" fill="white" transform="translate(0.953369)" />
          </clipPath>
        </defs>
      </svg>
      {/* Lines */}
      <svg className="absolute top-0" width="1440" height="1017" viewBox="0 0 1440 1017" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_478)">
          <path d="M0 0H0.993146V1017H0V0Z" fill="url(#paint0_linear_1_478)" />
          <path d="M80.4448 0H81.438V1017H80.4448V0Z" fill="url(#paint1_linear_1_478)" />
          <path d="M160.89 0H161.883V1017H160.89V0Z" fill="url(#paint2_linear_1_478)" />
          <path d="M241.334 0H242.328V1017H241.334V0Z" fill="url(#paint3_linear_1_478)" />
          <path d="M321.779 0H322.772V1017H321.779V0Z" fill="url(#paint4_linear_1_478)" />
          <path d="M402.224 0H403.217V1017H402.224V0Z" fill="url(#paint5_linear_1_478)" />
          <path d="M482.669 0H483.662V1017H482.669V0Z" fill="url(#paint6_linear_1_478)" />
          <path d="M563.114 0H564.107V1017H563.114V0Z" fill="url(#paint7_linear_1_478)" />
          <path d="M643.559 0H644.552V1017H643.559V0Z" fill="url(#paint8_linear_1_478)" />
          <path d="M724.003 0H724.997V1017H724.003V0Z" fill="url(#paint9_linear_1_478)" />
          <path d="M804.448 0H805.441V1017H804.448V0Z" fill="url(#paint10_linear_1_478)" />
          <path d="M884.893 0H885.886V1017H884.893V0Z" fill="url(#paint11_linear_1_478)" />
          <path d="M965.338 0H966.331V1017H965.338V0Z" fill="url(#paint12_linear_1_478)" />
          <path d="M1045.78 0H1046.78V1017H1045.78V0Z" fill="url(#paint13_linear_1_478)" />
          <path d="M1126.23 0H1127.22V1017H1126.23V0Z" fill="url(#paint14_linear_1_478)" />
          <path d="M1206.67 0H1207.67V1017H1206.67V0Z" fill="url(#paint15_linear_1_478)" />
          <path d="M1287.12 0H1288.11V1017H1287.12V0Z" fill="url(#paint16_linear_1_478)" />
          <path d="M1367.56 0H1368.56V1017H1367.56V0Z" fill="url(#paint17_linear_1_478)" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_1_478" x1="0.496573" y1="0" x2="0.496573" y2="1017" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.15" />
            <stop offset="0.745" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint1_linear_1_478" x1="80.9414" y1="0" x2="80.9414" y2="1017" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.15" />
            <stop offset="0.745" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint2_linear_1_478" x1="161.386" y1="0" x2="161.386" y2="1017" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.15" />
            <stop offset="0.745" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint3_linear_1_478" x1="241.831" y1="0" x2="241.831" y2="1017" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.15" />
            <stop offset="0.745" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint4_linear_1_478" x1="322.276" y1="0" x2="322.276" y2="1017" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.15" />
            <stop offset="0.745" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint5_linear_1_478" x1="402.721" y1="0" x2="402.721" y2="1017" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.15" />
            <stop offset="0.745" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint6_linear_1_478" x1="483.166" y1="0" x2="483.166" y2="1017" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.15" />
            <stop offset="0.745" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint7_linear_1_478" x1="563.61" y1="0" x2="563.61" y2="1017" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.15" />
            <stop offset="0.745" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint8_linear_1_478" x1="644.055" y1="0" x2="644.055" y2="1017" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.15" />
            <stop offset="0.745" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint9_linear_1_478" x1="724.5" y1="0" x2="724.5" y2="1017" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.15" />
            <stop offset="0.745" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint10_linear_1_478" x1="804.945" y1="0" x2="804.945" y2="1017" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.15" />
            <stop offset="0.745" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint11_linear_1_478" x1="885.39" y1="0" x2="885.39" y2="1017" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.15" />
            <stop offset="0.745" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint12_linear_1_478" x1="965.834" y1="0" x2="965.834" y2="1017" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.15" />
            <stop offset="0.745" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint13_linear_1_478" x1="1046.28" y1="0" x2="1046.28" y2="1017" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.15" />
            <stop offset="0.745" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint14_linear_1_478" x1="1126.72" y1="0" x2="1126.72" y2="1017" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.15" />
            <stop offset="0.745" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint15_linear_1_478" x1="1207.17" y1="0" x2="1207.17" y2="1017" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.15" />
            <stop offset="0.745" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint16_linear_1_478" x1="1287.61" y1="0" x2="1287.61" y2="1017" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.15" />
            <stop offset="0.745" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="paint17_linear_1_478" x1="1368.06" y1="0" x2="1368.06" y2="1017" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0.15" />
            <stop offset="0.745" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <clipPath id="clip0_1_478">
            <rect width="1449" height="1017" fill="white" />
          </clipPath>
        </defs>
      </svg>
      {/* Circle */}
      <svg className="absolute top-96 right-80" xmlns="http://www.w3.org/2000/svg" width="217" height="217" fill="none" viewBox="0 0 217 217"><g stroke="#fff" opacity=".1"><circle cx="108.5" cy="108.5" r="54" /><circle cx="108.5" cy="108.5" r="108" /></g></svg>
      {/* Background */}
      <Image
        src="/images/background-desktop.png"
        alt="Background"
        fill
        className="object-cover fixed inset-0 -z-10"
      />
    </div>
  );
}
