import { Icon, StyleProps, ThemingProps } from "@chakra-ui/react";

export const RyoLogo = ({ ...rest }: ThemingProps & StyleProps) => {
  const { fill } = rest;

  return (
    <Icon
      width="286"
      height="169"
      viewBox="0 0 286 169"
      fill={fill || "#FBCB4A"}
      {...rest}
    >
      <path d="M38.8798 107.27C39.2398 108.187 39.3124 109.141 39.0973 110.132C38.8823 111.123 38.5246 111.944 38.0244 112.594C37.4727 113.113 36.7526 113.396 35.8642 113.442C35.1068 113.438 34.2605 113.015 33.3253 112.173C31.7073 107.67 29.776 103.14 27.5315 98.581C25.4179 93.9709 23.4609 89.3748 21.6605 84.7927C19.8087 80.0797 18.4011 75.3433 17.4377 70.5834C16.6052 65.7722 16.5957 60.9399 17.409 56.0865C18.3908 53.5849 19.7023 52.6918 21.3435 53.4071C22.9847 54.1224 23.8638 55.5906 23.9808 57.8115C22.3585 62.5294 21.8608 67.0321 22.4875 71.3196C23.0628 75.4763 24.2132 79.5581 25.9387 83.5651C27.6642 87.5721 29.6773 91.5417 31.9779 95.4738C34.4095 99.3545 36.7101 103.287 38.8798 107.27Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M210.114 -34.5909L208.347 -33.8965C201.432 -30.7261 195.41 -26.2441 190.281 -20.4507C185.152 -14.6573 181.676 -7.92649 179.852 -0.258275C178.698 4.88036 177.686 10.1896 176.816 15.6696C176.451 17.9712 176.164 20.2686 175.956 22.5619C174.128 20.251 172.31 18.1008 170.499 16.1115C169.124 14.5358 167.46 13.3763 165.505 12.633L159.88 9.85587C158.267 8.82729 156.39 8.28032 154.248 8.21496C152.238 8.09816 150.267 7.89018 148.336 7.59103C146.092 7.26383 143.962 7.42056 141.947 8.06123C140.062 8.65045 138.241 9.59268 136.483 10.8879C134.805 12.0008 133.203 13.3101 131.679 14.8157C130.155 16.3214 128.67 17.7358 127.226 19.0591L127.071 18.6664C124.107 12.2748 120.396 8.2165 115.94 6.49138C111.433 4.63533 106.668 4.24045 101.647 5.30674C96.756 6.32158 91.8069 8.3417 86.7993 11.3671C81.7404 14.2616 77.2168 17.1724 73.2285 20.0996C70.8674 21.7829 68.9341 23.9783 67.4286 26.6856C66.7641 27.8622 66.0742 29.0161 65.3588 30.1471C63.0627 28.2563 60.4375 26.6671 57.483 25.3794C53.055 23.341 48.1922 21.9268 42.8946 21.1369C37.6765 20.1646 32.2714 19.8702 26.6793 20.2539C21.0357 20.5067 15.5582 21.3742 10.2467 22.8567C5.06608 24.2877 0.24787 26.2564 -4.20795 28.7627C-8.58429 31.0867 -12.1938 34.0162 -15.0364 37.5512C-20.4319 44.2049 -24.5251 51.4805 -27.3161 59.3779C-30.1072 67.2752 -31.6194 75.3502 -31.8528 83.6028C-32.2686 91.7759 -31.3915 99.97 -29.2216 108.185C-27.2341 116.321 -24.1337 124.019 -19.9206 131.28C-18.9386 133.01 -17.4634 135.226 -15.4948 137.929C-13.6571 140.683 -11.5319 143.399 -9.11909 146.078C-6.83723 148.809 -4.43615 151.266 -1.91586 153.449C0.473518 155.684 2.7109 157.147 4.79629 157.839C7.06404 158.611 9.39492 159.735 11.7889 161.213C14.183 162.69 16.5442 163.122 18.8727 162.51C21.2011 161.897 23.5156 161.441 25.816 161.142C28.1164 160.842 30.2625 160.15 32.2543 159.066C34.3256 157.798 36.3735 156.087 38.398 153.931C40.4739 151.907 42.316 149.672 43.9243 147.226C45.6121 144.598 47.0264 141.851 48.1671 138.985C49.3079 136.119 49.939 133.302 50.0604 130.534C50.1913 130.482 50.2825 130.522 50.3339 130.653L50.5303 130.576C53.1347 131.819 55.8303 133.103 58.6171 134.426C61.3524 135.618 64.221 136.38 67.2228 136.712C70.4864 136.941 73.6098 136.62 76.5928 135.751C79.5759 134.881 82.2223 133.539 84.532 131.724C86.8417 129.91 88.775 127.715 90.3319 125.138C92.0197 122.511 93.1347 119.579 93.6769 116.343C94.0077 114.075 93.8808 111.952 93.2965 109.974C93.3975 109.992 93.4986 110.009 93.5999 110.026C98.6357 110.919 103.286 110.83 107.55 109.759C111.763 108.557 115.692 106.635 119.339 103.993C119.765 107 120.908 110.102 122.769 113.3C124.71 116.316 126.966 118.981 129.538 121.295C132.292 123.689 135.168 125.431 138.165 126.52C141.213 127.74 144.138 127.876 146.939 126.926C153.718 124.565 159.616 121.114 164.633 116.574C169.702 112.164 173.809 106.848 176.955 100.624C178.358 97.6551 179.017 94.5247 178.933 91.233C178.848 87.9413 178.189 84.7245 176.954 81.5825C179.264 79.7682 181.041 77.5589 182.284 74.9545C183.608 72.1677 184.486 69.4043 184.921 66.6644L185.557 62.8727L189.66 67.9759C191.138 69.8134 192.931 71.3002 195.04 72.4363C195.219 72.5327 195.398 72.6286 195.576 72.724C196.598 71.6246 197.664 70.5633 198.772 69.5432C198.723 69.5094 198.673 69.4754 198.624 69.4414C193.466 65.6939 189.477 61.2372 186.658 56.0713C186.846 54.7671 187.015 53.4704 187.165 52.1813C187.735 48.6324 187.599 45.2098 186.758 41.9135C185.916 38.6172 184.616 35.5009 182.858 32.5646C182.33 31.5846 181.773 30.6237 181.186 29.682C181.19 29.5001 181.195 29.318 181.2 29.1354C181.462 20.5695 182.691 11.7745 184.888 2.7503C186.281 -2.93541 188.834 -8.16995 192.546 -12.9534C196.207 -17.8677 200.71 -21.6014 206.054 -24.1546C206.708 -24.4118 207.206 -24.683 207.548 -24.9682C208.637 -23.7339 210.01 -23.8953 211.665 -25.4523C211.875 -25.6861 212.151 -25.9457 212.492 -26.2309C212.834 -26.5161 213.109 -26.7756 213.32 -27.0094C213.451 -27.0609 213.542 -27.0211 213.593 -26.8902L213.79 -26.9674C215.305 -26.9581 216.392 -27.4608 217.051 -28.4754C219.796 -28.7982 222.601 -28.3892 225.467 -27.2484C228.282 -26.2386 231.165 -25.6332 234.115 -25.4323C236.126 -25.3155 238.267 -25.2502 240.539 -25.2362C242.943 -25.2738 245.306 -25.2201 247.63 -25.0752C249.954 -24.9304 252.159 -24.512 254.244 -23.8201C256.46 -23.1797 258.412 -22.0576 260.1 -20.4539C266.619 -14.2496 271.554 -7.65005 274.907 -0.655374C278.26 6.33931 279.992 13.4416 280.105 20.6515C280.217 27.8614 278.815 35.062 275.898 42.2534C273.269 48.7323 269.36 54.9171 264.17 60.8079C265.381 61.4318 266.569 62.098 267.733 62.8051C273.156 56.58 277.259 50.1689 280.043 43.5717C283.329 35.7819 284.853 27.929 284.614 20.0131C284.376 12.0971 282.451 4.31455 278.841 -3.33472C275.18 -11.1149 270.041 -18.6168 263.425 -25.8404C261.713 -27.8883 259.632 -29.3377 257.182 -30.1886C254.863 -31.0909 252.425 -31.7196 249.867 -32.0749C247.309 -32.4301 244.764 -32.5632 242.229 -32.4743C239.644 -32.5162 237.163 -32.6751 234.788 -32.9509C232.726 -33.1986 230.678 -33.6029 228.644 -34.1639C226.741 -34.7763 224.889 -35.2579 223.089 -35.6085C221.238 -36.09 219.398 -36.3494 217.57 -36.3867C215.69 -36.5549 213.859 -36.2135 212.078 -35.3625C211.372 -35.2362 210.717 -34.979 210.114 -34.5909ZM175.595 28.3671C175.555 29.5923 175.536 30.8164 175.541 32.0392C175.69 37.421 176.481 42.7021 177.912 47.8827C178.8 51.0991 180.077 54.1921 181.742 57.1615C181.7 57.513 181.653 57.8659 181.603 58.2202C181.033 61.7691 180.098 65.159 178.798 68.39C177.447 71.49 175.605 73.7251 173.272 75.0952C171.304 72.3927 168.874 70.249 165.985 68.6641C163.095 67.0791 159.99 66.4855 156.671 66.8831C155.52 67.0327 154.616 67.6149 153.957 68.6296C153.377 69.4619 153.071 70.4134 153.038 71.4841C153.085 72.3725 153.419 73.2234 154.041 74.037C154.663 74.8505 155.575 75.2479 156.776 75.2292C159.68 74.5417 162.303 74.8712 164.645 76.2177C167.119 77.5128 169.132 79.3666 170.684 81.7792C172.237 84.1918 173.226 86.9013 173.652 89.9077C174.157 92.7318 174.009 95.4344 173.21 98.0154C172.013 101.508 170.138 104.814 167.586 107.933C165.084 111.183 162.312 113.934 159.268 116.188C155.49 118.881 151.483 120.607 147.247 121.365C143.011 122.122 138.889 121.248 134.882 118.742C133.816 117.952 132.712 116.874 131.571 115.509C130.431 114.144 129.395 112.662 128.464 111.063C127.665 109.412 126.956 107.801 126.339 106.23C125.801 104.477 125.654 102.948 125.897 101.644L126.135 101.096C126.163 100.783 126.217 100.535 126.297 100.353L126.535 99.806C126.904 99.2075 127.171 98.3471 127.334 97.2249L130.883 93.5637C132.146 92.1609 133.317 90.7185 134.397 89.2362C135.056 88.2216 135.336 87.2046 135.238 86.1853C135.219 84.9836 134.925 84.0415 134.354 83.3589C133.784 82.6762 133.054 82.3583 132.166 82.4051C131.226 82.321 130.296 82.8377 129.375 83.9552C127.346 86.8683 125.174 89.6107 122.86 92.1824C120.545 94.7542 117.88 97.0103 114.864 98.9508C111.377 101.228 107.554 102.654 103.398 103.23C99.1894 103.674 95.1029 103.466 91.1378 102.606C90.0981 102.349 89.077 102.05 88.0745 101.708C87.4708 101.124 86.8249 100.567 86.1366 100.037C83.6163 97.8537 80.8319 96.1519 77.7833 94.9317C76.9837 94.554 76.2 94.2029 75.4323 93.8784C73.9387 92.2825 72.6464 90.5023 71.5554 88.5377C70.8546 87.3031 70.1818 86.1152 69.537 84.9741C70.1607 83.3359 70.7982 81.6663 71.4494 79.9651C72.9641 75.7429 74.217 71.6235 75.2081 67.6071C76.2786 63.4083 76.8255 59.4152 76.8487 55.6279C77.0028 51.7891 76.3574 48.4157 74.9125 45.5074C73.9071 43.3333 72.9672 41.1334 72.0928 38.9078C71.2183 36.6823 70.0025 34.7419 68.4455 33.0868L68.3448 32.9764C69.6014 31.072 70.9793 29.2204 72.4784 27.4217C75.7933 23.5501 79.4706 20.2162 83.5103 17.4199C87.4985 14.4928 91.6644 12.4026 96.0081 11.1493C100.352 9.89599 104.663 9.71344 108.941 10.6016C113.219 11.4898 117.149 13.7994 120.731 17.5305C122.99 19.8168 124.028 23.0359 123.846 27.188C123.794 31.2885 123.18 35.6861 122.002 40.3805C120.903 44.8926 119.648 49.3907 118.236 53.8747C116.773 58.2278 115.849 61.8399 115.466 64.7107C115.274 66.1462 115.501 67.4928 116.147 68.7505C116.871 69.8259 118.085 70.0292 119.787 69.3605C120.572 69.0519 121.568 68.5095 122.774 67.7332C124.112 66.9056 125.474 66.1434 126.863 65.4466C128.383 64.6985 129.823 64.1326 131.183 63.7492C132.675 63.3143 133.968 63.3353 135.062 63.8121C137.334 63.826 138.66 62.7763 139.038 60.6629C139.417 58.5494 138.774 56.913 137.109 55.7535C136.015 55.2766 134.828 55.1387 133.547 55.3398C132.214 55.41 130.893 55.7023 129.584 56.2167C128.406 56.6797 127.213 57.2992 126.007 58.0755C124.749 58.7208 123.688 59.2889 122.823 59.7799C123.412 57.4327 124.081 54.9031 124.829 52.1912C125.707 49.4278 126.495 46.6247 127.192 43.7818C127.888 40.939 128.428 38.0821 128.811 35.2112C129.195 32.3403 129.316 29.5723 129.176 26.9072C129.83 26.65 130.368 26.2876 130.789 25.82C132.182 24.3658 133.484 22.8719 134.695 21.3382C135.906 19.8045 137.351 18.4812 139.029 17.3683C143.331 14.4692 147.675 13.2159 152.06 13.6085C156.577 13.9496 160.774 15.3989 164.65 17.9563C168.606 20.3314 172.047 23.513 174.974 27.5012C175.186 27.7896 175.393 28.0783 175.595 28.3671ZM60.8383 79.1471C61.4648 80.7416 62.1448 82.2941 62.8784 83.8045C61.3387 86.9878 59.9761 90.1618 58.7906 93.3265C57.299 93.7614 55.9221 94.6802 54.6597 96.083C53.4768 97.3034 52.2425 98.3929 50.9567 99.3514C50.3255 100.053 49.9024 100.899 49.6874 101.89C49.6033 102.83 49.7412 103.758 50.1013 104.675C50.4099 105.46 50.8892 106.103 51.5392 106.603C52.2686 106.921 53.2224 106.849 54.4007 106.386C55.0833 105.815 55.7917 105.31 56.5257 104.871C57.2083 104.3 57.8255 103.756 58.3772 103.237C59.9623 104.578 61.5848 104.092 63.2445 101.778C63.4035 101.413 63.5905 100.735 63.8055 99.7436C65.7693 98.972 67.8219 98.6189 69.9634 98.6843C71.0753 98.6494 72.2713 98.774 73.5514 99.0581C75.5627 101.054 77.7381 102.854 80.0776 104.458C82.4104 106.083 84.8519 107.38 87.4022 108.35C87.5677 108.595 87.7281 108.845 87.8834 109.099C89.0992 111.039 89.7913 113.185 89.9597 115.537C90.2591 117.837 89.6186 120.054 88.0383 122.186C85.9297 125.281 83.6177 127.474 81.1022 128.765C78.5353 129.925 75.8281 130.535 72.9806 130.596C70.2126 130.474 67.3558 129.934 64.41 128.976C61.5952 127.966 58.8342 126.709 56.1269 125.203C55.346 124.754 54.4225 124.135 53.3564 123.345C52.2389 122.424 51.0419 121.685 49.7654 121.129C48.5684 120.39 47.3433 119.964 46.0903 119.852C44.9681 119.689 43.9208 120.1 42.9482 121.087C42.0272 122.204 41.6532 123.56 41.8263 125.155C41.9479 126.618 42.4903 127.614 43.4535 128.142C43.8043 130.574 43.5683 132.858 42.7455 134.995C42.0536 137.08 40.8661 139.058 39.1829 140.928C36.761 143.996 34.4327 146.724 32.1978 149.113C29.9629 151.503 27.6275 153.252 25.1915 154.36C22.7555 155.468 20.0366 155.856 17.0348 155.524C14.033 155.193 10.4888 153.865 6.4021 151.541C0.155221 147.951 -5.25008 143.425 -9.81381 137.964C-14.429 132.372 -18.1394 126.198 -20.9451 119.441C-23.8818 112.737 -25.8763 105.737 -26.9286 98.4432C-28.1119 91.2006 -28.3554 84.0422 -27.659 76.9678C-26.9627 69.8935 -25.3545 63.2165 -22.8346 56.9369C-20.1838 50.6059 -16.6632 45.1422 -12.273 40.5458C-10.1176 38.3388 -7.85931 36.3936 -5.49816 34.7103C-3.18845 32.896 -0.684689 31.3833 2.01313 30.1722C7.01601 27.9042 13.1107 26.4919 20.2972 25.9352C27.4323 25.2475 34.4435 25.5909 41.3309 26.9652C48.1668 28.2086 54.264 30.649 59.6225 34.2865C60.3161 34.7272 60.977 35.188 61.6054 35.6691C59.4007 39.1033 57.9172 42.9706 57.1548 47.2707C56.131 52.3579 56.0073 57.6204 56.7838 63.0582C57.3778 68.4165 58.7293 73.7795 60.8383 79.1471ZM62.6895 71.1656C63.4316 73.3721 64.3876 75.5977 65.5576 77.8425C66.4211 75.7573 67.2137 73.6758 67.9352 71.5981C69.1601 67.792 70.0062 63.9837 70.4736 60.173C71.0719 56.3108 70.887 52.3786 69.919 48.3762C69.0369 44.704 67.3877 41.5066 64.9714 38.7839C64.8346 39.0542 64.7001 39.3254 64.5677 39.5976C62.347 43.9461 61.0286 48.0911 60.6126 52.0328C60.1967 55.9744 60.2015 59.4484 60.6271 62.4549C61.0528 65.4613 61.7402 68.3649 62.6895 71.1656ZM66.9893 91.6919C67.1284 91.6624 67.2679 91.639 67.4077 91.6217C67.3234 91.4983 67.2395 91.3747 67.156 91.2506L66.9893 91.6919Z"
      />
      <path d="M245.931 54.955C245.942 54.9438 245.953 54.9325 245.964 54.9212C246.731 53.4109 247.538 51.8095 248.384 50.1168C249.31 48.2418 250.21 46.3014 251.084 44.2955C255.573 44.9499 259.986 45.0291 264.325 44.5333C265.373 44.1218 266.161 43.4344 266.689 42.4712C267.166 41.3771 267.381 40.3858 267.334 39.4975C267.236 38.4782 266.836 37.6529 266.135 37.0217C265.433 36.3906 264.442 36.1755 263.161 36.3766C262.034 36.9705 260.594 37.5363 258.841 38.0741C257.087 38.6119 255.166 38.9135 253.075 38.9791C254.057 36.4776 254.843 34.0532 255.432 31.706C256.1 29.1764 256.467 26.8409 256.533 24.6994C256.2 23.4697 255.644 22.6304 254.863 22.1816C254.213 21.6813 253.535 21.4943 252.829 21.6206C252.123 21.7469 251.48 22.2262 250.901 23.0585C250.4 23.7084 250.068 24.5945 249.905 25.7167C250.466 27.9142 250.583 30.1352 250.256 32.3795C250.008 34.4415 249.447 36.4754 248.573 38.4813C246.721 37.9998 244.937 37.1139 243.221 35.8235C241.585 34.3507 240.161 32.2654 238.95 29.5676C237.884 28.7774 236.958 28.5367 236.172 28.8453C235.466 28.9716 234.889 29.4252 234.44 30.206C233.94 30.856 233.673 31.7163 233.641 32.787C233.557 33.7269 233.695 34.655 234.055 35.5714C235.663 37.3574 237.482 38.9097 239.511 40.2281C241.62 41.3642 243.874 42.2922 246.273 43.0122C244.716 45.5886 242.939 47.7979 240.943 49.6402C240.545 50.552 240.396 51.5175 240.494 52.5368C240.661 53.2423 240.884 53.8856 241.163 54.4669C242.764 54.5632 244.355 54.7266 245.931 54.955Z" />
      <path d="M240.822 110.732C242.659 112.603 244.515 112.298 245.231 110.144C246.171 107.323 246.773 104.207 246.597 101.265C246.483 99.3819 245.668 96.8611 243.235 96.1069C241.551 95.5797 239.538 96.2244 239.111 97.6932C238.411 100.094 236.977 102.588 238.35 105.503C239.315 106.979 239.299 109.182 240.822 110.732ZM227.139 113.459C228.404 113.019 229.258 112.339 229.468 110.697C229.823 107.954 230.489 105.275 229.107 102.534C228.785 100.777 228.454 98.9573 226.99 97.5195C224.789 95.3575 222.954 96.0826 221.736 98.3444C219.551 102.398 220.681 108.623 223.775 112.219C224.758 113.363 225.743 113.946 227.139 113.459ZM253.731 108.669C252.838 108.177 251.569 109.873 251.204 111.219C250.856 112.494 251.301 113.729 252.437 114.189C254.346 114.959 253.643 116.229 253.642 117.608C253.653 124.969 249.281 129.391 243.387 132.474C239.262 134.636 234.317 134.529 230.248 133.092C225.835 131.532 222.41 127.8 219.239 124.121C216.953 121.471 215.056 119.224 218.33 116.035C219.411 114.983 219.83 113.495 218.747 112.067C217.631 110.597 216.09 110.917 214.789 111.533C213.134 112.347 211.244 112.55 209.454 112.105C208.178 111.816 206.786 111.786 206.036 113.288C205.287 114.79 206.387 115.741 207.011 116.859C207.938 118.514 210.114 119.003 210.669 121.059C212.233 126.863 215.668 131.012 220.549 134.793C226.452 139.366 232.46 140.811 239.657 140.428C242.538 140.274 244.257 138.168 247.668 138.046C252.829 136.855 255.416 131.757 258.135 127.377C260.855 122.996 259.203 116.811 263.31 112.639C264.619 111.308 264.086 109.546 262.982 108.239C259.855 104.556 257.053 110.491 253.731 108.669ZM281.607 91.576C280.129 87.9624 277.913 84.7442 276.184 81.2673C273.041 74.9527 266.338 71.5235 260.697 67.4858C258.451 65.8795 255.758 64.0688 253.159 63.5337C245.531 61.9654 237.594 61.6096 229.949 62.7295C222.763 63.7819 216.066 67.1623 209.9 71.1312C208.108 72.2832 205.882 72.5285 204.421 74.4938C200.52 79.7446 195.704 84.2589 192.392 90.0079C191.202 92.093 190.16 94.2587 189.273 96.4893C187.455 100.981 187.42 106.146 185.138 110.343C184.807 110.95 184.738 111.664 184.729 112.354C184.7 115.035 185.233 117.565 184.909 120.25C184.578 123.066 184.09 125.743 185.217 128.474C186.146 130.72 187.197 132.801 187.759 135.171C190.399 140.77 192.382 146.654 195.937 151.802C197.476 154.031 199.745 155.365 201.694 156.967C208.077 162.221 214.428 167.887 223.623 167.394C224.923 167.323 226.281 167.332 227.543 167.617C235.582 169.441 243.196 167.135 250.543 164.602C259.8 161.409 267.22 155.304 272.638 147.064C273.854 145.215 276.043 144.318 276.804 142.12C278.627 136.859 281.758 132.076 282.564 126.441C283.361 120.863 283.935 115.271 284.892 109.725C285.236 107.735 284.945 105.842 284.482 103.963C284.216 102.885 283.891 101.804 283.598 100.725C282.781 97.7198 282.777 94.4595 281.596 91.5628L281.607 91.576ZM272.293 106.593C273.396 118.173 271.808 129.801 263.495 139.324C259.128 144.326 255.1 149.351 248.199 151.349C245.505 152.13 243.402 154.998 240.067 155.196C233.2 155.869 226.753 155.071 219.809 153.035C211.132 150.489 207.86 143.215 202.088 138.192C201.586 137.757 201.091 136.855 201.189 136.261C202.069 131.115 198.236 127.238 197.512 122.385C196.866 117.977 197.815 114.032 198.422 110.05C199.269 104.516 201.802 99.3678 204.789 94.5451C208.635 88.3323 212.82 82.2745 220.056 79.8137C222.919 78.8414 224.673 76.3667 227.658 75.7486C238.935 73.4149 248.929 74.8465 258.531 82.2586C266.878 88.6919 271.374 97.0304 272.283 106.579L272.293 106.593Z" />
    </Icon>
  );
};
