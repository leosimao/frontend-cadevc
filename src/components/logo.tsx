import { cn } from '@/lib/utils'
import { SVGProps, memo } from 'react'
const SvgComponent = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 223 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('h-[52px] w-[222px]', className)}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M143.238 45.5545C141.883 45.5545 140.527 45.385 139.172 45.0462C137.847 44.7073 136.646 44.122 135.568 43.2902C134.52 42.4585 133.658 41.3495 132.98 39.9632C132.302 38.5769 131.963 36.8364 131.963 34.7416C131.963 33.9714 132.025 33.0473 132.148 31.969C132.271 30.8908 132.502 29.7818 132.841 28.642C133.211 27.5022 133.704 26.3778 134.32 25.2687C134.967 24.1289 135.799 23.1123 136.815 22.219C137.832 21.3256 139.064 20.6016 140.512 20.0471C141.96 19.4926 143.685 19.2154 145.687 19.2154C147.289 19.2154 148.645 19.4002 149.754 19.7699C150.863 20.1395 151.756 20.6478 152.434 21.2948C153.112 21.9109 153.605 22.6348 153.913 23.4666C154.221 24.2984 154.375 25.1917 154.375 26.1467C154.375 27.5638 154.082 28.7652 153.497 29.751C152.942 30.7368 152.203 31.5686 151.279 32.2463C150.385 32.8932 149.384 33.4015 148.275 33.7712C147.166 34.1409 146.072 34.4335 144.994 34.6492C143.916 34.834 142.915 34.9572 141.991 35.0188C141.097 35.0496 140.404 35.065 139.911 35.065C139.911 35.6504 139.988 36.2357 140.142 36.821C140.327 37.3755 140.589 37.8684 140.928 38.2997C141.267 38.7309 141.713 39.0852 142.268 39.3625C142.822 39.6397 143.5 39.7784 144.301 39.7784C145.102 39.7784 145.718 39.6551 146.149 39.4087C146.612 39.1314 146.981 38.8388 147.258 38.5307C147.536 38.1919 147.767 37.8992 147.952 37.6527C148.167 37.3755 148.445 37.2369 148.783 37.2369C148.937 37.2369 149.199 37.2831 149.569 37.3755C149.969 37.4371 150.37 37.5911 150.77 37.8376C151.171 38.084 151.525 38.4229 151.833 38.8542C152.141 39.2855 152.295 39.84 152.295 40.5177C152.295 41.4111 152.018 42.1812 151.463 42.8281C150.909 43.4751 150.185 43.9988 149.292 44.3993C148.429 44.7997 147.459 45.0924 146.381 45.2772C145.302 45.4621 144.255 45.5545 143.238 45.5545ZM151.371 16.6739C151.125 16.6739 150.817 16.5507 150.447 16.3042C150.077 16.027 149.677 15.6727 149.245 15.2414C148.845 14.7793 148.414 14.271 147.952 13.7165C147.52 13.162 147.104 12.5767 146.704 11.9606C146.088 12.5767 145.456 13.162 144.809 13.7165C144.193 14.271 143.593 14.7793 143.007 15.2414C142.453 15.6727 141.944 16.027 141.482 16.3042C141.051 16.5507 140.712 16.6739 140.466 16.6739C140.25 16.6739 140.004 16.5969 139.726 16.4428C139.48 16.258 139.234 16.0578 138.987 15.8421C138.771 15.5957 138.571 15.3646 138.386 15.149C138.232 14.9333 138.155 14.7793 138.155 14.6869C138.155 14.5637 138.34 14.2556 138.71 13.7627C139.11 13.2698 139.603 12.6845 140.189 12.0068C140.805 11.2982 141.467 10.5589 142.175 9.78874C142.915 8.98779 143.608 8.21764 144.255 7.47829C144.44 7.26265 144.84 7.09322 145.456 6.96999C146.103 6.84677 146.719 6.78516 147.305 6.78516C147.705 6.78516 148.167 6.83137 148.691 6.92378C149.245 7.0162 149.6 7.20104 149.754 7.47829L151.232 9.97358C151.725 10.7745 152.172 11.5139 152.573 12.1916C152.973 12.8693 153.296 13.4393 153.543 13.9013C153.789 14.3634 153.913 14.6253 153.913 14.6869C153.913 14.7485 153.82 14.8871 153.635 15.1028C153.45 15.3184 153.219 15.5495 152.942 15.7959C152.696 16.0115 152.418 16.2118 152.11 16.3966C151.833 16.5815 151.587 16.6739 151.371 16.6739ZM111.289 44.9076C112.399 45.3388 113.554 45.5545 114.755 45.5545C116.45 45.5545 117.851 45.1848 118.96 44.4455C120.1 43.7061 120.947 42.7511 121.502 41.5805C121.502 42.289 121.609 42.8744 121.825 43.3364C122.072 43.7677 122.395 44.122 122.796 44.3993C123.227 44.6457 123.72 44.8305 124.274 44.9538C124.86 45.0462 125.476 45.0924 126.123 45.0924H127.786C128.217 45.0924 128.479 45.0308 128.572 44.9076C128.664 44.7843 128.741 44.5379 128.803 44.1682C128.833 43.8293 128.88 43.1516 128.941 42.135C129.034 41.0876 129.142 39.8554 129.265 38.4383C129.388 36.9904 129.511 35.4193 129.634 33.725L130.004 28.5496C130.127 26.7936 130.251 25.0993 130.374 23.4666C130.497 21.8339 130.605 20.386 130.697 19.1229C130.79 17.8291 130.867 16.7971 130.928 16.027L131.021 14.8717C131.021 14.348 130.944 13.8551 130.79 13.393C130.636 12.9001 130.374 12.4689 130.004 12.0992C129.634 11.7295 129.142 11.4369 128.525 11.2212C127.909 11.0056 127.139 10.8978 126.215 10.8978H124.413C124.166 10.8978 123.997 10.9132 123.905 10.944C123.812 10.944 123.735 10.9748 123.673 11.0364C123.55 11.1596 123.473 11.5601 123.442 12.2378C123.381 13.2236 123.319 14.1016 123.258 14.8717L123.073 17.1822C123.042 17.9523 122.996 18.7841 122.934 19.6775C122.873 20.5708 122.811 21.6182 122.749 22.8197C122.503 21.495 121.902 20.5708 120.947 20.0471C120.023 19.4926 118.791 19.2154 117.25 19.2154C115.649 19.2154 114.247 19.4618 113.045 19.9547C111.875 20.4476 110.858 21.1099 109.996 21.9417C109.164 22.7427 108.471 23.6668 107.916 24.7142C107.362 25.7616 106.93 26.8398 106.622 27.9489C106.314 29.0579 106.099 30.1669 105.975 31.2759C105.852 32.3541 105.791 33.3399 105.791 34.2333C105.791 36.2357 106.022 37.9454 106.484 39.3625C106.977 40.7796 107.624 41.9502 108.425 42.8744C109.256 43.7985 110.211 44.4763 111.289 44.9076ZM115.263 27.4406C116.034 26.0543 117.204 25.3612 118.775 25.3612C119.545 25.3612 120.177 25.5306 120.67 25.8695C121.163 26.2083 121.548 26.655 121.825 27.2095C122.102 27.764 122.287 28.4109 122.38 29.1503C122.472 29.8588 122.518 30.5982 122.518 31.3683C122.518 34.1409 122.072 36.1741 121.178 37.4679C120.285 38.7618 119.176 39.4087 117.851 39.4087C117.112 39.4087 116.496 39.2239 116.003 38.8542C115.541 38.4845 115.171 37.9916 114.894 37.3755C114.617 36.7594 114.416 36.0662 114.293 35.2961C114.201 34.5259 114.154 33.7404 114.154 32.9394C114.154 30.629 114.524 28.796 115.263 27.4406ZM84.4663 32.8932C81.971 34.4643 80.7234 36.6362 80.7234 39.4087C80.7234 40.5177 80.8928 41.4727 81.2317 42.2736C81.6013 43.0438 82.0788 43.6753 82.6641 44.1682C83.2803 44.6611 83.9888 45.0154 84.7897 45.231C85.6215 45.4467 86.4995 45.5545 87.4237 45.5545C89.3336 45.5545 90.8739 45.154 92.0445 44.353C93.246 43.5521 94.2164 42.6125 94.9557 41.5343C95.2022 42.7973 95.6951 43.7831 96.4344 44.4917C97.1737 45.2002 98.2828 45.5545 99.7614 45.5545C100.809 45.5545 101.687 45.3696 102.395 45C103.135 44.6303 103.705 44.1528 104.105 43.5675C104.536 42.9822 104.844 42.3353 105.029 41.6267C105.214 40.9182 105.307 40.225 105.307 39.5473C105.307 39.3009 105.168 39.1468 104.891 39.0852C104.613 39.0236 104.29 38.9312 103.92 38.808C103.581 38.6847 103.273 38.4691 102.996 38.161C102.719 37.8222 102.58 37.2677 102.58 36.4975C102.58 36.1587 102.611 35.5579 102.673 34.6954C102.765 33.8328 102.857 32.924 102.95 31.969C103.073 30.9832 103.166 30.0591 103.227 29.1965C103.32 28.3031 103.366 27.687 103.366 27.3481C103.366 24.7604 102.596 22.7581 101.055 21.341C99.515 19.9239 97.0351 19.2154 93.6157 19.2154C91.8597 19.2154 90.3194 19.4002 88.9948 19.7699C87.6701 20.1395 86.5611 20.6478 85.6677 21.2948C84.8052 21.9109 84.1428 22.6502 83.6807 23.5128C83.2495 24.3754 83.0338 25.2841 83.0338 26.2391C83.0338 28.6112 84.6049 29.7972 87.7471 29.7972C88.2092 29.7972 88.5481 29.7664 88.7637 29.7048C88.9794 29.6124 89.118 29.4275 89.1796 29.1503C89.3028 28.5958 89.4414 28.0875 89.5955 27.6254C89.7495 27.1633 89.9497 26.7782 90.1962 26.4702C90.4426 26.1313 90.7661 25.8695 91.1666 25.6846C91.5671 25.4998 92.0908 25.4074 92.7377 25.4074C93.9083 25.4074 94.6785 25.7 95.0481 26.2853C95.4178 26.8707 95.6026 27.6562 95.6026 28.642C95.6026 28.9809 95.5872 29.2735 95.5564 29.52C95.5564 29.7356 95.541 30.0129 95.5102 30.3517C90.6429 30.475 86.9616 31.3221 84.4663 32.8932ZM92.7377 34.3257C93.5078 34.2025 94.2934 34.1409 95.0943 34.1409C95.0327 35.0342 94.8633 35.8044 94.586 36.4513C94.3088 37.0982 93.9699 37.6527 93.5694 38.1148C93.1998 38.5461 92.7685 38.8696 92.2756 39.0852C91.7827 39.3009 91.2898 39.4087 90.7969 39.4087C90.2732 39.4087 89.7803 39.2701 89.3182 38.9928C88.8869 38.7156 88.6713 38.2227 88.6713 37.5141C88.6713 36.898 88.8561 36.3743 89.2258 35.943C89.5955 35.5117 90.073 35.1729 90.6583 34.9264C91.2744 34.6492 91.9675 34.4489 92.7377 34.3257ZM166.908 35.3885C166.6 36.6516 166.261 37.93 165.891 39.2238C165.768 38.4845 165.629 37.6065 165.475 36.5899C165.352 35.5733 165.213 34.5259 165.059 33.4477C164.936 32.3387 164.798 31.2451 164.644 30.1669C164.489 29.0579 164.351 28.0567 164.228 27.1633C164.135 26.2391 164.043 25.4536 163.95 24.8067L163.766 23.5128C163.612 22.7118 163.35 22.0649 162.98 21.572C162.641 21.0791 162.133 20.6941 161.455 20.4168C160.808 20.1395 159.976 19.9547 158.96 19.8623C157.974 19.7391 156.773 19.6775 155.356 19.6775C154.924 19.6775 154.57 19.8007 154.293 20.0471C154.015 20.2936 153.861 20.5246 153.831 20.7403C153.831 20.8019 153.861 20.9251 153.923 21.1099C153.985 21.264 154.092 21.5874 154.246 22.0803C154.401 22.5424 154.616 23.2201 154.893 24.1135C155.171 24.9761 155.54 26.1467 156.002 27.6254C156.465 29.1041 157.019 30.9524 157.666 33.1705C158.344 35.3577 159.129 37.9916 160.023 41.0722C160.177 41.5959 160.346 42.1042 160.531 42.5971C160.716 43.0592 160.947 43.4751 161.224 43.8447C161.501 44.2144 161.84 44.5225 162.241 44.7689C162.672 44.9846 163.211 45.0924 163.858 45.0924H167.971C168.402 45.0924 168.71 45.0616 168.895 45C169.08 44.9384 169.295 44.7381 169.542 44.3993C169.819 43.968 170.25 43.2132 170.836 42.135C171.421 41.026 172.052 39.7475 172.73 38.2997C173.408 36.8518 174.101 35.3115 174.809 33.6788C175.549 32.0461 176.211 30.4904 176.796 29.0117C177.382 27.5022 177.859 26.1621 178.229 24.9915C178.599 23.8209 178.783 22.9737 178.783 22.45C178.783 21.8031 178.506 21.2948 177.952 20.9251C177.428 20.5554 176.796 20.2782 176.057 20.0933C175.318 19.9085 174.563 19.8007 173.793 19.7699C173.023 19.7391 172.407 19.7237 171.945 19.7237C171.328 19.7237 170.928 19.8007 170.743 19.9547C170.558 20.0779 170.42 20.3552 170.327 20.7865C169.804 22.9737 169.341 24.9299 168.941 26.655C168.571 28.3493 168.217 29.9204 167.878 31.3683C167.57 32.7854 167.247 34.1255 166.908 35.3885ZM190.602 39.4087C191.495 39.4087 192.265 39.2855 192.912 39.039C193.59 38.7926 194.175 38.5153 194.668 38.2073C195.161 37.8992 195.577 37.6219 195.916 37.3755C196.255 37.129 196.563 37.0058 196.84 37.0058C197.549 37.0058 197.903 37.4679 197.903 38.3921C197.903 38.6077 197.857 38.9158 197.764 39.3163C197.672 39.6859 197.548 40.0864 197.394 40.5177C197.24 40.9182 197.071 41.3032 196.886 41.6729C196.732 42.0426 196.578 42.3198 196.424 42.5047C196.27 42.6587 195.993 42.9052 195.592 43.244C195.223 43.5829 194.714 43.9218 194.067 44.2606C193.421 44.5995 192.666 44.8922 191.803 45.1386C190.941 45.4159 189.986 45.5545 188.938 45.5545C187.768 45.5545 186.551 45.385 185.288 45.0462C184.055 44.6765 182.931 44.0604 181.914 43.1978C180.898 42.3044 180.051 41.1184 179.373 39.6397C178.726 38.1302 178.403 36.2511 178.403 34.0022C178.403 33.2013 178.449 32.2925 178.541 31.2759C178.664 30.2285 178.895 29.1657 179.234 28.0875C179.573 26.9785 180.02 25.9003 180.574 24.8529C181.16 23.7747 181.93 22.8197 182.885 21.9879C183.84 21.1561 184.98 20.4938 186.304 20.0009C187.66 19.4772 189.262 19.2154 191.11 19.2154C192.62 19.2154 193.913 19.4002 194.992 19.7699C196.101 20.1087 197.009 20.5862 197.718 21.2024C198.426 21.7877 198.95 22.4808 199.289 23.2818C199.659 24.0827 199.844 24.9453 199.844 25.8695C199.844 27.533 199.32 28.7652 198.272 29.5662C197.225 30.3363 195.746 30.7214 193.836 30.7214C193.374 30.7214 193.051 30.6906 192.866 30.629C192.712 30.5366 192.635 30.3517 192.635 30.0745C192.635 29.3351 192.62 28.6728 192.589 28.0875C192.558 27.5022 192.466 27.0093 192.311 26.6088C192.188 26.2083 191.988 25.9003 191.711 25.6846C191.434 25.469 191.033 25.3612 190.509 25.3612C189.554 25.3612 188.784 25.6692 188.199 26.2853C187.644 26.9015 187.213 27.6562 186.905 28.5496C186.628 29.4121 186.443 30.3055 186.351 31.2297C186.289 32.1539 186.258 32.924 186.258 33.5401C186.258 35.7274 186.597 37.2523 187.275 38.1148C187.983 38.9774 189.092 39.4087 190.602 39.4087ZM212.311 37.8376C211.757 37.1907 210.833 36.8672 209.539 36.8672C208.676 36.8672 207.952 37.0058 207.367 37.2831C206.782 37.5603 206.32 37.93 205.981 38.3921C205.642 38.8542 205.395 39.3779 205.241 39.9632C205.087 40.5485 205.01 41.1492 205.01 41.7653C205.01 42.8436 205.257 43.7523 205.75 44.4917C206.243 45.2002 207.182 45.5545 208.568 45.5545C209.523 45.5545 210.294 45.385 210.879 45.0462C211.495 44.6765 211.957 44.2452 212.265 43.7523C212.604 43.2286 212.835 42.6741 212.958 42.0888C213.081 41.5035 213.143 40.9644 213.143 40.4715C213.143 39.3317 212.866 38.4537 212.311 37.8376ZM212.45 33.4939C212.604 33.4015 212.789 33.1397 213.004 32.7084C213.528 31.5994 214.314 30.552 215.361 29.5662C216.439 28.5804 217.518 27.5484 218.596 26.4702C219.674 25.392 220.614 24.2213 221.414 22.9583C222.215 21.6952 222.616 20.2474 222.616 18.6147C222.616 17.5364 222.416 16.5044 222.015 15.5186C221.646 14.5021 221.06 13.6241 220.259 12.8847C219.458 12.1146 218.426 11.5139 217.163 11.0826C215.931 10.6205 214.437 10.3895 212.681 10.3895C211.202 10.3895 209.739 10.5589 208.291 10.8978C206.874 11.2058 205.596 11.6987 204.456 12.3764C203.347 13.0542 202.438 13.9167 201.729 14.9641C201.052 16.0115 200.713 17.2592 200.713 18.7071C200.713 20.0933 201.098 21.1253 201.868 21.8031C202.669 22.45 204.009 22.7735 205.888 22.7735C206.443 22.7735 206.782 22.7272 206.905 22.6348C207.059 22.5116 207.167 22.2806 207.228 21.9417C207.352 21.3256 207.49 20.7095 207.644 20.0933C207.798 19.4464 208.029 18.8611 208.337 18.3374C208.645 17.8137 209.046 17.3824 209.539 17.0435C210.062 16.7047 210.74 16.5352 211.572 16.5352C212.65 16.5352 213.42 16.8587 213.882 17.5056C214.375 18.1218 214.622 18.7995 214.622 19.5388C214.622 20.2474 214.422 20.9251 214.021 21.572C213.651 22.1881 213.174 22.8043 212.589 23.4204C212.003 24.0057 211.372 24.6064 210.694 25.2225C210.047 25.8078 209.431 26.4086 208.846 27.0247C208.26 27.6408 207.767 28.2877 207.367 28.9655C206.997 29.6124 206.812 30.2901 206.812 30.9987C206.812 31.738 207.074 32.3695 207.598 32.8932C208.122 33.3861 208.984 33.6326 210.186 33.6326H211.849C212.096 33.6326 212.296 33.5864 212.45 33.4939ZM74.4476 39.039C73.8007 39.2855 73.0305 39.4087 72.1372 39.4087C70.6277 39.4087 69.5186 38.9774 68.8101 38.1148C68.1324 37.2523 67.7935 35.7274 67.7935 33.5401C67.7935 32.924 67.8243 32.1539 67.8859 31.2297C67.9055 31.0335 67.9293 30.8387 67.9573 30.6453C67.9622 30.6109 67.9673 30.5766 67.9726 30.5423C68.0765 29.8608 68.2325 29.1965 68.4404 28.5496C68.7485 27.6562 69.1798 26.9015 69.7343 26.2853C70.3196 25.6692 71.0898 25.3612 72.0447 25.3612C72.5684 25.3612 72.9689 25.469 73.2462 25.6846C73.5234 25.9003 73.7237 26.2083 73.8469 26.6088C74.0009 27.0093 74.0933 27.5022 74.1241 28.0875C74.1549 28.6728 74.1703 29.3351 74.1703 30.0745C74.1703 30.3517 74.2474 30.5366 74.4014 30.629C74.5862 30.6906 74.9097 30.7214 75.3718 30.7214C77.2818 30.7214 78.7604 30.3363 79.8078 29.5662C80.8552 28.7652 81.3789 27.533 81.3789 25.8695C81.3789 24.9453 81.1941 24.0827 80.8244 23.2818C80.4856 22.4808 79.9619 21.7877 79.2533 21.2024C78.5448 20.5862 77.636 20.1087 76.527 19.7699C76.2042 19.6592 75.8621 19.5651 75.5007 19.4876C74.6548 19.3061 73.7031 19.2154 72.6455 19.2154C71.9458 19.2154 71.2815 19.2529 70.6525 19.3279C69.6197 19.4511 68.6821 19.6754 67.8397 20.0009C67.52 20.1199 67.211 20.2487 66.9128 20.3875C65.9756 20.8234 65.1447 21.3569 64.4203 21.9879C63.764 22.5595 63.1951 23.1892 62.7134 23.8772C62.5524 24.1071 62.4012 24.3435 62.2597 24.5864C62.2084 24.6744 62.1585 24.7632 62.1098 24.8529C61.5553 25.9003 61.1086 26.9785 60.7698 28.0875C60.4309 29.1657 60.1998 30.2285 60.0766 31.2759C59.9842 32.2925 59.938 33.2013 59.938 34.0022C59.938 36.2511 60.2614 38.1302 60.9084 39.6397C61.5861 41.1184 62.4333 42.3044 63.4499 43.1978C64.4665 44.0604 65.5909 44.6765 66.8231 45.0462C68.0862 45.385 69.303 45.5545 70.4736 45.5545C71.521 45.5545 72.476 45.4159 73.3386 45.1386C74.2012 44.8922 74.9559 44.5995 75.6028 44.2606C76.2497 43.9218 76.758 43.5829 77.1277 43.244C77.5282 42.9052 77.8055 42.6587 77.9595 42.5047C78.1135 42.3198 78.2675 42.0426 78.4216 41.6729C78.6064 41.3032 78.7758 40.9182 78.9299 40.5177C79.0839 40.0864 79.2071 39.6859 79.2995 39.3163C79.392 38.9158 79.4382 38.6077 79.4382 38.3921C79.4382 37.4679 79.0839 37.0058 78.3754 37.0058C78.0981 37.0058 77.79 37.129 77.4512 37.3755C77.1123 37.6219 76.6964 37.8992 76.2035 38.2073C75.7106 38.5153 75.1253 38.7926 74.4476 39.039ZM145.29 24.2381C146.019 24.0835 146.789 24.4777 147.191 25.0836C147.611 25.7188 147.648 26.4482 147.494 27.1785C147.304 28.0616 146.836 28.9438 146.422 29.6461C146.202 30.0226 145.959 30.3859 145.695 30.7349L145.693 30.7392C145.385 31.1488 144.831 31.3358 144.338 31.1963L144.334 31.1943C143.913 31.0762 143.499 30.9345 143.096 30.7681C142.341 30.4606 141.434 30.0424 140.748 29.4548C140.183 28.9669 139.77 28.3645 139.72 27.6047C139.673 26.8787 140.046 26.0989 140.72 25.7802C141.499 25.412 142.616 25.6184 143.354 26.0443C143.684 25.2583 144.448 24.417 145.29 24.2381Z"
      fill="currentColor"
    />
    <path
      d="M51.3087 15.6817C50.695 19.0276 47.8785 21.4468 45.0223 21.0839C42.1721 20.7197 40.3559 17.7111 40.9756 14.3638C41.5941 11.0109 44.6381 7.35655 47.4883 7.72078C50.3458 8.08916 51.9284 12.3343 51.3087 15.6817Z"
      fill="currentColor"
    />
    <path
      d="M30.0056 0.0874366C33.107 -0.625822 36.6282 3.1502 37.4772 6.84155C38.3261 10.5329 36.4939 14.1008 33.3925 14.8141C30.2911 15.5274 27.0843 13.1183 26.2353 9.42694C25.3864 5.73559 26.9042 0.800695 30.0056 0.0874366Z"
      fill="currentColor"
    />
    <path
      d="M14.0367 3.75999C17.1381 3.04673 20.6593 6.82276 21.5082 10.5141C22.3572 14.2055 20.5249 17.7734 17.4235 18.4867C14.3221 19.1999 11.1153 16.7908 10.2664 13.0995C9.41746 9.40815 10.9353 4.47325 14.0367 3.75999Z"
      fill="currentColor"
    />
    <path
      d="M1.68624 27.0938C-0.333531 24.3535 -0.764398 19.8434 1.64509 18.2638C4.04985 16.691 8.38444 18.6484 10.4055 21.3943C12.4252 24.1346 12.1058 27.6343 9.70107 29.2071C7.29031 30.7812 3.7 29.8355 1.68624 27.0938Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36.5063 45.616C35.8167 46.46 34.928 47.3112 33.9209 47.6571C33.7271 47.7213 33.5255 47.7681 33.3187 47.8001C32.4472 47.9347 31.4841 47.8047 30.6273 47.5997C29.16 47.2557 27.5718 46.7847 26.1577 47.3878C24.6189 48.0448 23.8904 49.7171 22.6698 50.8361C20.6206 52.7143 17.203 52.7707 14.9113 51.3504C12.6195 49.9302 11.3837 47.3266 11.1499 44.7085C10.9202 42.083 11.577 39.4281 12.4381 36.8781C14.4586 30.9102 18.6675 24.15 25.2406 21.9321C31.8428 19.7043 39.2579 22.5423 44.4811 26.0659C46.7112 27.5729 48.8422 29.2871 50.2501 31.515C51.6504 33.7395 52.2446 36.5596 51.2819 39.078C50.6312 40.7801 49.1627 42.2572 47.4245 42.9579C46.5908 43.2939 45.6951 43.4514 44.7979 43.3696C43.8782 43.2855 42.976 42.9717 42.0764 42.7818C41.363 42.6311 40.6513 42.5582 39.9338 42.7394C39.157 42.9359 38.5194 43.3931 37.9511 43.9506C37.429 44.4626 36.9655 45.0593 36.5063 45.616ZM31.7075 28.2365C32.9503 27.9729 34.262 28.6451 34.9484 29.6781C35.6646 30.7609 35.7269 32.0045 35.4649 33.2496C35.1414 34.7552 34.3431 36.2592 33.6362 37.4566C33.2616 38.0984 32.847 38.7178 32.3981 39.3128L32.3941 39.3201C31.8696 40.0185 30.9248 40.3373 30.0844 40.0995L30.0768 40.0961C29.3592 39.8947 28.654 39.6532 27.9672 39.3695C26.6793 38.8451 25.133 38.1323 23.9634 37.1305C23.0006 36.2986 22.2968 35.2716 22.2105 33.9762C22.1307 32.7385 22.767 31.409 23.9154 30.8657C25.2432 30.2379 27.1485 30.5899 28.4069 31.3159C28.9682 29.9759 30.2707 28.5415 31.7075 28.2365Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgComponent)
export { Memo as Logo }
