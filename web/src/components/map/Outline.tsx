import { Icon, chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { Locations } from "@/hooks/state";
import { Callout } from "./Callout";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export const Outline = ({ location }: { location?: Locations }) => {
  if (!location) {
    return <></>;
  }

  const name = location.toString().toLowerCase().split(" ").join("_");
  const transition = {
    repeat: Infinity,
    duration: 1,
    ease: "easeInOut",
  };
  return (
    <>
      <ChakraBox
        layerStyle="fill"
        animate={{ opacity: [0.5, 1, 0.5] }}
        // @ts-ignore
        transition={transition}
      >
        <SvgHighlight location={location} />
      </ChakraBox>
      <ChakraBox
        layerStyle="fill"
        animate={{ y: [0, -10, 0] }}
        // @ts-ignore
        transition={transition}
      >
        <Callout location={location} />
      </ChakraBox>
    </>
  );
};

const SvgHighlight = ({ location }: { location: Locations }) => {
  return (
    <Icon
      boxSize="full"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        visibility={Locations.Bronx == location ? "visible" : "hidden"}
        d="M133 11V12H132V17H131V23H130.01V22H128.01V20H127.01V19H122V20H121V21H119V22H117.01V21H116.01V20H113V21H112V22H111V23H110V24H105V25H104V28H103V29H102V30H101V33.01H102V34.01H103V37.01H104V38.01H105V39.01H106V40.01H107V41.01H108V57.01H109.01V40H107.01V39H106.01V38H105.01V37H104.01V33H102.01V30.01H103.01V29.01H105.01V25.01H111.01V23.01H113.01V21.01H116V22.01H117V23.01H119.01V22.01H122.01V20.01H127V23.01H130V24.01H132.01V17.01H133.01V12.01H136V15.01H137V20.01H138V23.01H141V25.01H142.01V15.01H147V23.01H150V26.01H153V27.01H154.01V17.01H155.01V16.01H160V29.01H162V30.01H163V31.01H165V33.01H166V35.01H170V36.01H172V40.01H173V44.01H174V49H171V53H169V55H168V56H162V58H160V59H157V60H155V61H153V62H149V63H148V65H145V66H143V67H141V68H135.01V67H130.01V66H123V67H122V68H121V69H119V70H117V71H115.01V70H114.01V69H113.01V68H111.01V60H110V68.01H111V69.01H113V70.01H114V71.01H115V72.01H117.01V71.01H119.01V70.01H121.01V69.01H122.01V68.01H123.01V67.01H130V68.01H135V69.01H141.01V68.01H143.01V67.01H145.01V66.01H148.01V65.01H149.01V63.01H153.01V62.01H155.01V61.01H157.01V60.01H160.01V59.01H162.01V58.01H163.01V57.01H168.01V56.01H169.01V55.01H170.01V54.01H171.01V53.01H172.01V50.01H175.01V44H174.01V40H173.01V36H172.01V35H170.01V34H167.01V33H166.01V31H165.01V30H163.01V29H162.01V28H161.01V16H160.01V15H155V16H154V17H153V25H151.01V23H150.01V22H148.01V15H147.01V14H142V15H141V22H139.01V20H138.01V15H137.01V12H136.01V11H133Z"
        fill="#11ED83"
      />

      <g visibility={Locations.Brooklyn == location ? "visible" : "hidden"}>
        <path
          d="M155.001 140.003V141.003H154.001V142.003H152.001V143.003H150.001V144.003H148.001V145.003H145.001V146.003H143.001V147.003H140.001V148.003H138.001V149.003H136.001V150.003H134.001V151.003H132.001V152.003H130.001V153.013H132.011V152.013H134.011V151.013H136.011V150.013H138.011V149.013H140.011V148.013H143.011V147.013H145.011V146.013H148.011V145.013H150.011V144.013H152.011V143.013H154.011V142.013H155.011V141.013H158.001V142.013H159.001V144.013H160.001V146.013H161.001V148.013H162.001V149.013H163.001V150.013H164.001V152.013H165.001V153.013H166.001V155.013H167.001V156.013H168.001V157.013H169.001V159.013H170.001V160.013H171.001V163.013H172.001V165.013H173.001V166.013H174.001V167.013H175.001V168.013H176.001V170.013H177.001V171.013H178.001V172.003H176.001V173.003H173.001V174.003H172.001V175.003H171.001V176.003H170.001V177.003H168.001V178.003H167.001V179.003H165.001V180.003H164.001V181.003H162.001V182.003H160.001V183.003H159.001V184.003H157.001V185.003H156.001V186.003H154.001V187.003H152.001V188.003H151.001V189.003H149.001V190.003H148.001V191.003H146.001V192.003H144.001V193.013H146.001V194.013H151.001V198.003H150.001V200.013H151.001V203.003H150.001V205.003H148.001V206.003H143.001V209.003H142.001V217.003H140.001V220.003H139.001V221.003H136.001V223.003H132.011V219.003H131.011V218.003H128.011V217.003H125.011V216.003H121.001V218.003H120.001V219.003H119.001V220.003H118.001V221.003H117.001V222.003H116.001V223.003H114.001V224.003H106.011V223.003H102.011V222.003H99.0109V221.003H97.0109V220.003H95.0109V219.003H94.0109V218.003H92.0109V217.003H89.0109V216.003H87.0109V215.003H84.0109V214.003H80.0109V213.003H79.0009V214.003H74.0009V215.003H73.0009V216.003H65.0109V214.003H64.0109V213.003H63.0109V211.003H62.0109V208.003H61.0109V203.003H60.0109V199.003H59.0109V193.013H60.0109V191.013H61.0109V188.013H62.0109V185.013H63.0109V182.013H64.0109V180.013H65.0109V178.013H66.0109V176.013H67.0109V174.013H68.0109V172.013H69.0109V171.013H70.0109V170.003H68.0009V172.003H67.0009V174.003H66.0009V176.003H65.0009V178.003H64.0009V180.003H63.0009V182.003H62.0009V185.003H61.0009V188.003H60.0009V191.003H59.0009V193.003H58.0009V199.013H59.0009V203.013H60.0009V208.013H61.0009V211.013H62.0009V213.013H63.0009V214.013H64.0009V217.013H74.0109V215.013H79.0109V214.013H80.0009V215.013H84.0009V216.013H87.0009V217.013H89.0009V218.013H92.0009V219.013H94.0009V220.013H95.0009V221.013H97.0009V222.013H99.0009V223.013H102.001V224.013H106.001V225.013H114.011V224.013H116.011V223.013H117.011V222.013H118.011V221.013H119.011V220.013H120.011V219.013H121.011V218.013H122.011V217.013H125.001V218.013H128.001V219.013H131.001V223.013H132.001V224.013H136.011V223.013H137.011V222.013H139.011V221.013H140.011V220.013H141.011V218.013H142.011V217.013H143.011V209.013H144.011V207.013H148.011V206.013H150.011V205.013H151.011V203.013H152.011V200.003H151.011V198.013H152.011V194.003H151.011V193.003H146.011V192.013H148.011V191.013H149.011V190.013H151.011V189.013H152.011V188.013H154.011V187.013H156.011V186.013H157.011V185.013H159.011V184.013H160.011V183.013H162.011V182.013H164.011V181.013H165.011V180.013H167.011V179.013H168.011V178.013H170.011V177.013H171.011V176.013H172.011V175.013H173.011V174.013H176.011V173.013H179.011V171.003H178.011V170.003H177.011V168.003H176.011V167.003H175.011V166.003H174.011V165.003H173.011V163.003H172.011V160.003H171.011V159.003H170.011V157.003H169.011V156.003H168.011V155.003H167.011V153.003H166.011V152.003H165.011V150.003H164.011V149.003H163.011V148.003H162.011V146.003H161.011V144.003H160.011V142.003H159.011V140.003H155.001Z"
          fill="#11ED83"
        />
        <path
          d="M126.001 153.003V154.003H124.001V155.003H121.001V156.003H119.001V157.003H116.001V158.003H113.001V159.003H112.001V160.003H108.001V161.003H105.001V162.003H103.001V163.003H100.001V164.003H97.0009V165.003H95.0009V166.003H92.0009V167.003H88.0009V168.013H92.0109V167.013H95.0109V166.013H97.0109V165.013H100.011V164.013H103.011V163.013H105.011V162.013H108.011V161.013H113.011V159.013H116.011V158.013H119.011V157.013H121.011V156.013H124.011V155.013H126.011V154.013H128.011V153.003H126.001Z"
          fill="#11ED83"
        />
        <path
          d="M77.0109 161.003H74.0009V162.003H73.0009V163.003H72.0009V165.003H71.0009V167.013H72.0109V165.013H73.0109V163.013H74.0109V162.013H77.0009V163.013H80.0009V164.013H82.0009V165.013H85.0109V164.003H82.0109V163.003H80.0109V162.003H77.0109V161.003Z"
          fill="#11ED83"
        />
      </g>

      <g visibility={Locations.Central == location ? "visible" : "hidden"}>
        <path
          d="M145.002 65H148.012V66H149.012V67H150.012V69H151.012V71H152.012V72H153.012V75H154.012V76H155.012V78H156.012V80H157.012V82H158.012V83H159.012V84H160.012V86H161.012V87H162.012V90.01H161.002V87.01H160.002V86.01H159.002V84.01H158.002V83.01H157.002V82.01H156.002V80.01H155.002V78.01H154.002V76.01H153.002V75.01H152.002V72.01H151.002V71.01H150.002V69.01H149.002V67.01H148.002V66.01H145.012V67.01H143.012V68.01H141.012V69.01H135.002V68.01H130.002V67.01H123.012V68.01H122.012V69.01H121.012V70.01H119.012V71.01H117.012V72.01H115.002V71.01H114.002V70.01H113.002V69.01H112.012V77.01H111.012V82.01H110.012V84.01H109.012V88.01H108.012V90.01H107.012V92.01H106.012V95.01H105.012V97.01H104.012V99.01H103.012V100.01H102.012V101.01H101.012V103.01H100.012V105.01H99.0122V106.01H98.0122V109.01H97.0122V111.01H96.0122V113.01H95.0122V114.01H94.0122V116.01H93.0122V118.01H92.0122V120.01H91.0122V121.01H90.0022V120H91.0022V118H92.0022V116H93.0022V114H94.0022V113H95.0022V111H96.0022V109H97.0022V106H98.0022V105H99.0022V103H100.002V101H101.002V100H102.002V99H103.002V97H104.002V95H105.002V92H106.002V90H107.002V88H108.002V84H109.002V82H110.002V77H111.002V68H113.012V69H114.012V70H115.012V71H117.002V70H119.002V69H121.002V68H122.002V67H123.002V66H130.012V67H135.012V68H141.002V67H143.002V66H145.002V65Z"
          fill="#11ED83"
        />
        <path
          d="M161.002 92H162.012V96.01H161.012V99.01H160.012V100.01H159.012V102.01H158.012V103.01H155.012V105H156.012V106H157.012V107H158.012V114H159.012V119H160.012V123H161.012V128.01H160.012V129.01H159.012V130.01H157.012V131.01H156.012V132.01H155.012V133.01H154.012V134.01H153.012V135.01H151.012V136.01H150.012V137.01H149.012V138.01H147.012V139.01H146.012V140.01H144.012V141.01H140.012V142.01H137.012V143.01H135.012V144.01H133.012V145.01H131.012V146.01H130.012V147.01H127.002V146H130.002V145H131.002V144H133.002V143H135.002V142H137.002V141H140.002V140H144.002V139H146.002V138H147.002V137H149.002V136H150.002V135H151.002V134H153.002V133H154.002V132H155.002V131H156.002V130H157.002V129H159.002V127H160.002V123.01H159.002V119.01H158.002V114.01H157.002V107.01H156.002V106.01H155.002V105.01H154.002V102H158.002V99H160.002V96H161.002V92Z"
          fill="#11ED83"
        />
        <path
          d="M90.0122 123H89.0022V124H88.0022V126H87.0022V128H86.0022V130.01H87.0122V128.01H88.0122V126.01H89.0122V124.01H90.0122V123Z"
          fill="#11ED83"
        />
        <path
          d="M86.0122 132H85.0022V133H84.0022V135H83.0022V138H82.0022V140H81.0022V142H80.0022V144H79.0022V147H78.0022V149H77.0022V152H76.0022V155.01H77.0022V156.01H79.0022V157.01H81.0022V158.01H83.0022V159.01H85.0022V160.01H89.0022V161.01H97.0122V160.01H100.012V159.01H102.012V158.01H103.012V157.01H109.012V156.01H111.012V155.01H112.012V154.01H113.012V153.01H114.012V152.01H117.012V151.01H120.012V150.01H123.012V149.01H125.012V148H123.002V149H120.002V150H117.002V151H114.002V152H112.002V154H111.002V155H109.002V156H103.002V157H102.002V158H100.002V159H97.0022V160H89.0122V159H85.0122V158H83.0122V157H81.0122V156H79.0122V155H77.0122V152.01H78.0122V149.01H79.0122V147.01H80.0122V144.01H81.0122V142.01H82.0122V140.01H83.0122V138.01H84.0122V135.01H85.0122V133.01H86.0122V132Z"
          fill="#11ED83"
        />
      </g>

      <path
        visibility={Locations.Coney == location ? "visible" : "hidden"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M190 177.998V178.998H189V184.998H185V185.998H184V186.998H183.01V185.998H182.01V184.998H181.01V183.998H176V184.998H175V185.998H174V197.998H173.01V196.998H164V198.998H163V202.998H162V208.008H163V210.008H164V211.008H167V212.008H168V213.008H176V218.008H177V219.008H180.01V218.008H181.01V217.008H183V218.008H184V219.008H185V220.008H186V221.008H187V222.008H190.01V221.008H193V225.008H194V226.008H198V228.008H199V229.008H202.01V228.008H203.01V223.008H204V224.008H205V225.008H211V226.008H215V227.008H218.01V226.008H223.01V225.008H224.01V224.008H225.01V220.998H224.01V219.998H223.01V216.008H224.01V211.998H223.01V208.998H222.01V207.998H220.01V206.998H218.01V204.998H217.01V203.998H216.01V199.998H215.01V198.998H207.01V197.998H206.01V195.998H205.01V194.998H204.01V193.998H203.01V192.998H199.01V178.998H198.01V177.998H190ZM202 227.998V221.998H204.01V222.998H205.01V223.998H211.01V224.998H215.01V225.998H218V224.998H223V223.998H224V221.008H222V215.998H223V212.008H222V209.008H220V208.008H217V205.008H215V200.008H209.01V201.008H208V200.008H207V199.008H206V198.008H205V196.008H203V194.008H198V179.008H190.01V186.008H185.01V188.008H182V186.008H181V185.008H176.01V186.008H175.01V198.008H174.01V199.008H173V198.008H165.01V199.008H164.01V203.008H163.01V207.998H164.01V209.998H167V208.998H168.01V211.998H176V210.998H177.01V212.998H178.01V214.008H177.01V217.998H180V216.998H181V215.998H183.01V216.998H184.01V217.998H185.01V218.998H187.01V220.998H190V219.998H194.01V224.998H199.01V227.998H202Z"
        fill="#11ED83"
      />

      <g visibility={Locations.Jersey == location ? "visible" : "hidden"}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M67 25H70.01V26H71.01V28H72.01V29H74.01V30H79.01V31H80V30H81V29H84.01V30H86.01V31H88V28H89V27H92.01V28H93.01V29H94.01V32H96.01V35H98V34H102.01V35H103.01V39H104.01V49H105.01V54.01H104V49.01H103V39.01H102V35.01H98.01V36.01H95V33.01H93V29.01H92V28.01H89.01V32.01H85V31.01H84V30.01H81.01V32.01H80.01V34.01H79V31.01H74V30.01H71V28.01H70V26.01H67.01V29.01H62.01V31.01H60V30.01H57.01V32.01H56.01V35H58.01V36H70V35H77.01V41.01H75V38.01H70.01V39.01H69.01V43.01H67.01V44.01H64.01V49.01H61.01V50.01H60.01V52.01H57.01V55H60.01V57H61.01V58.01H60.01V60.01H58.01V63H64V62H65V61H66.01V63H67.01V65H68.01V66.01H67.01V72.01H66V63.01H64.01V64.01H58V63.01H57V60H58V59H59V58H60V57.01H59V56.01H57V55.01H56V52H57V51H59V50H60V49H61V48H63V44H64V43H67V42H68V39H69V38H70V37.01H58V36.01H56V35.01H55V32H56V30H57V29H60.01V30H61V29H62V28H66V26H67V25ZM76 38H75.01V37H70.01V36.01H76V38Z"
          fill="#11ED83"
        />
        <path
          d="M103 57H104.01V59.01H103.01V60.01H102.01V67H103.01V74.01H102.01V75H103.01V80H104.01V84.01H103.01V85.01H102.01V89.01H101.01V91.01H100.01V93.01H99.01V95.01H98.01V96.01H95.01V98.01H94.01V99.01H93.01V100.01H92.01V102.01H91.01V103.01H90.01V105.01H89.01V107.01H88.01V108.01H87.01V110.01H86.01V111.01H85.01V113.01H84.01V114.01H83.01V116.01H82.01V118.01H81.01V119.01H80.01V121.01H79.01V123.01H78.01V125.01H77.01V127.01H76V125H77V123H78V121H79V119H80V118H81V116H82V114H83V113H84V111H85V110H86V108H87V107H88V105H89V103H90V102H91V100H92V99H93V98H94V96H95V95H98V93H99V91H100V89H101V85H102V84H103V80.01H102V75.01H101V74H102V67.01H101V59H103V57Z"
          fill="#11ED83"
        />
        <path d="M60 73H63.01V74.01H60V73Z" fill="#11ED83" />
        <path
          d="M53 74H59.01V75.01H53.01V76.01H50.01V79.01H47.01V82H55.01V83H56.01V84H57.01V85.01H51.01V89.01H45.01V90.01H44.01V94H50.01V95.01H46.01V99H51V98H52.01V102H53.01V104H54.01V105H55.01V106H56.01V108.01H51.01V111H52.01V112.01H49.01V115.01H48.01V119H49.01V125.01H48.01V130H52V129H54V128H56.01V129.01H55.01V131.01H46V130.01H42.01V131.01H41V130.01H39V129.01H33.01V131.01H30.01V135.01H28.01V137.01H26V135.01H25V134.01H24V133.01H21.01V134.01H20.01V135.01H19.01V139.01H18.01V141.01H17.01V146H20.01V150H22.01V151.01H20.01V153.01H19.01V156H21.01V158H22.01V159H25V158H26V157H27.01V158H30.01V160H32.01V161.01H31.01V165H32.01V168.01H30.01V173H33.01V180H37V179H38V176H39V175H42V174H43V173H44.01V176H47V170H48V169H49V168H50V167H51V166H52V165H53V164H54V163H55V162H56V161H57V160H58.01V161.01H57.01V162.01H56.01V163.01H55.01V164.01H54.01V165.01H53.01V166.01H52.01V167.01H51.01V168.01H50.01V169.01H49.01V170.01H48.01V176.01H47.01V177.01H44V176.01H43V175.01H42.01V176.01H39.01V179.01H38.01V180.01H37.01V181.01H33V180.01H32V174.01H30V173.01H29V168H30V167H31V165.01H30V161.01H29V159.01H27V158.01H26.01V159.01H25.01V160.01H22V159.01H21V158.01H20V157.01H19V156.01H18V153H19V151H20V150.01H19V147.01H17V146.01H16V141H17V139H18V135H19V134H20V133H21V132H24.01V133H25.01V134H26.01V135H28V134H29V131H30V130H32V129H33V128H39.01V129H41.01V130H42V129H46.01V130H47V125H48V119.01H47V115H48V112H49V111H50V108H51V107H55V106.01H54V105.01H53V104.01H52V102.01H51V100.01H46V99.01H45V95.01H44V94.01H43V90H44V89H45V88H50V85H51V84H55V83.01H47V82.01H46V79H47V78H49V76H50V75H53V74Z"
          fill="#11ED83"
        />
        <path
          d="M75.01 129H74V131H73V133H72V135H71V137H70V139H69V141H68V142H67V144H66V146H65V147H64V149H63V150H62V152H61V153H60V155H59V156.01H60.01V155.01H61.01V153.01H62.01V152.01H63.01V150.01H64.01V149.01H65.01V147.01H66.01V146.01H67.01V144.01H68.01V142.01H69.01V141.01H70.01V139.01H71.01V137.01H72.01V135.01H73.01V133.01H74.01V131.01H75.01V129Z"
          fill="#11ED83"
        />
      </g>

      <g visibility={Locations.Queens == location ? "visible" : "hidden"}>
        <path
          d="M172.006 58.9976H166.996V59.9976H164.996V60.9976H162.996V61.9976H160.996V62.9976H159.996V66.9976H158.996V68.9976H157.996V70.9976H156.996V75.0076H157.996V76.0076H158.996V78.0076H159.996V79.0076H160.996V81.0076H161.996V83.0076H162.996V84.0076H164.996V88.0076H165.996V90.0076H167.006V87.9976H166.006V82.9976H163.006V80.9976H162.006V78.9976H161.006V77.9976H160.006V75.9976H159.006V74.9976H158.006V71.0076H159.006V69.0076H160.006V67.0076H161.006V63.0076H163.006V62.0076H165.006V61.0076H167.006V60.0076H171.996V61.0076H173.996V62.0076H174.996V63.0076H176.996V64.0076H179.996V68.9976H178.996V73.0076H179.996V74.0076H180.996V78.0076H183.996V80.0076H185.996V84.0076H187.996V86.0076H189.006V85.0076H192.006V84.0076H193.006V83.0076H196.996V84.0076H197.996V85.0076H198.996V87.9976H196.996V88.9976H194.996V89.9976H192.006V88.9976H189.996V92.9976H188.996V94.0076H189.996V96.9976H187.996V98.0076H189.996V99.0076H191.996V100.008H194.996V103.008H195.996V104.008H197.996V110.008H200.996V112.998H199.996V114.008H200.996V115.008H203.996V116.008H205.996V117.008H206.996V118.008H208.996V119.008H212.996V121.998H211.996V123.998H210.996V125.008H211.996V126.008H212.996V127.008H214.006V126.008H218.996V127.008H220.996V128.008H221.996V131.008H222.996V134.998H217.996V137.008H221.996V139.998H220.996V141.998H219.996V142.998H217.996V147.008H219.006V145.008H222.996V147.008H223.996V153.998H217.996V154.998H214.006V153.998H213.006V151.998H210.996V152.998H208.996V158.008H210.996V160.998H209.996V162.998H204.996V164.998H201.996V165.998H200.996V166.998H197.006V164.008H198.006V162.998H197.006V160.998H194.996V161.998H193.996V162.998H192.996V163.998H191.996V164.998H190.996V165.998H188.996V166.998H187.996V169.008H189.996V172.998H188.996V173.998H186.006V172.998H179.006V170.998H178.006V169.998H177.006V167.998H176.006V166.998H175.006V165.998H174.006V164.998H173.006V162.998H172.006V159.998H171.006V158.998H170.006V156.998H169.006V155.998H168.006V154.998H167.006V152.998H166.006V151.998H165.006V149.998H164.006V148.998H163.006V147.998H162.006V145.998H161.006V144.998H160.006V143.998H159.006V142.998H158.006V141.998H157.006V140.008H158.006V139.008H159.006V138.008H160.006V137.008H161.006V135.008H162.006V134.008H163.006V133.008H164.006V132.008H165.006V131.008H166.006V130.008H167.006V129.008H168.006V125.998H167.006V119.998H165.006V115.998H163.996V120.008H164.996V121.008H165.996V126.008H166.996V128.998H165.996V129.998H164.996V130.998H163.996V131.998H162.996V132.998H161.996V133.998H160.996V134.998H159.996V136.998H158.996V137.998H157.996V138.998H156.996V139.998H155.996V142.008H156.996V143.008H157.996V144.008H158.996V145.008H159.996V146.008H160.996V148.008H161.996V149.008H162.996V150.008H163.996V152.008H164.996V153.008H165.996V155.008H166.996V156.008H167.996V157.008H168.996V159.008H169.996V160.008H170.996V163.008H171.996V165.008H172.996V166.008H173.996V167.008H174.996V168.008H175.996V170.008H176.996V171.008H177.996V173.008H178.996V174.008H185.996V175.008H189.006V174.008H191.006V168.998H190.006V167.998H189.006V167.008H191.006V166.008H192.006V165.008H193.006V164.008H194.006V163.008H195.006V162.008H195.996V163.008H196.996V163.998H195.996V167.008H196.996V168.008H201.006V167.008H202.006V166.008H205.006V165.008H206.006V164.008H210.006V163.008H211.006V161.008H212.006V157.998H211.006V156.998H210.006V154.008H211.006V153.008H211.996V154.008H212.996V155.008H213.996V156.008H218.006V155.008H224.006V154.008H225.006V146.998H224.006V144.998H223.006V143.998H220.006V143.008H221.006V142.008H222.006V140.008H223.006V136.998H222.006V136.008H223.006V135.008H224.006V130.998H223.006V127.998H222.006V126.998H221.006V125.998H219.006V124.998H213.996V125.998H213.006V124.998H212.006V124.008H213.006V122.008H214.006V118.998H213.006V117.998H209.006V116.998H207.006V115.998H206.006V114.998H204.006V113.998H201.006V113.008H202.006V109.998H201.006V108.998H199.006V103.998H198.006V102.998H196.006V99.9976H195.006V98.9976H192.006V97.9976H190.006V97.0076H191.006V93.9976H190.006V93.0076H191.006V90.0076H191.996V91.0076H195.006V90.0076H197.006V89.0076H199.006V88.0076H200.006V84.9976H199.006V83.9976H198.006V81.9976H192.996V82.9976H191.996V83.9976H188.006V82.9976H187.006V79.9976H186.006V78.9976H185.006V77.9976H184.006V76.9976H182.006V73.9976H181.006V72.9976H180.006V69.0076H181.006V63.9976H180.006V62.9976H177.006V61.9976H175.006V60.9976H174.006V59.9976H172.006V58.9976Z"
          fill="#11ED83"
        />
        <path
          d="M167.006 91.9976H165.996V99.9976H164.996V100.998H163.996V101.998H162.996V102.998H161.996V104.998H160.996V109.008H161.996V114.008H164.006V112.998H163.006V108.998H162.006V105.008H163.006V104.008H164.006V102.008H165.006V101.008H166.006V100.008H167.006V91.9976Z"
          fill="#11ED83"
        />
      </g>
    </Icon>
  );
};
