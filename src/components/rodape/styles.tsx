import tw from "tailwind-styled-components";

export const ConteinerPrincipal = tw.div`
  flex
  items-center
  justify-between
  px-6
  md:px-20
  py-6
`;

export const Conteiner = tw.div`
  flex
  items-end
  gap-[1px]
  text-[#71717b]
  text-sm
`;

export const Nav = tw.nav`
  flex
  gap-11
`;

export const Link = tw.a`
  hover:text-blue-400
  transition
`;

export const CirculoAzul = tw.span`
  w-1
  h-1
  rounded-full
  bg-[#2b7fff]
  inline-block
  mb-1.5
`;