import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0; //evita que a logo seja 'amassada' por falta de espaço.
`;

export const SearchForm = styled.form`
  padding-left: 16px;
  width: 100%;
  input {
    background: var(--search);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;
    &:focus {
      width: 318px;
    } //quando clicado > focado.
    transition: width 0.2s ease-out, color 0.2s ease-out; //faz com que seja adicionado o efeito diminuir o input.
    //trasnsition: [propiedade_alterar] [tempo] [forma_efeito];
  }
`;
