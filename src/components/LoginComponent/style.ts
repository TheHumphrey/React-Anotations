import styled from 'styled-components';

const LoginComponentStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 94.6%;
  width: 100%;

  .card {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    border: none;
    box-shadow: 0 7px 14px 0 rgba(65, 69, 88, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07);
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    .btn {
      width: 16rem;
    }
  }

  .email {
    margin-top: 20px;
  }

  .email:valid:focus {
    border-color: #28f000;
    box-shadow: 0 0 0 0.2rem rgba(40, 240, 0, 0.25);
  }

  .email:invalid {
    border-color: #f00000;
    box-shadow: 0 0 0 0.2rem rgba(240, 0, 0, 0.25);
  }

  .failEmail {
    margin-top: 20px;
    border-color: #f00000;
    box-shadow: 0 0 0 0.2rem rgba(240, 0, 0, 0.25);
  }

  .isOk {
    visibility: hidden;
  }

  .fail {
    visibility: visible;
    color: red;
  }

  .password {
    margin-top: 20px;
  }

  .password:valid:focus {
    border-color: #28f000;
    box-shadow: 0 0 0 0.2rem rgba(40, 240, 0, 0.25);
  }

  .password:invalid {
    border-color: #f00000;
    box-shadow: 0 0 0 0.2rem rgba(240, 0, 0, 0.25);
  }

  .badgeEmail {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3.125rem !important;
    color: #010305;
    border: 1px solid black;
    user-select: none;
    font-size: 0.8rem;
    line-height: 30px;
    font-weight: 600;
    img {
      margin-right: 0.2rem;
      border-radius: 50%;
      width: 18px;
    }
  }

  .submit {
    color: #4d5969;
    font-weight: 700;
    border-radius: 5px;
    width: 14rem;

    margin-top: 1rem;

    background-color: #fff;
    border-color: #fff;
    box-shadow: 0 0 0 1px rgba(43, 45, 80, 0.1), 0 2px 5px 0 rgba(43, 45, 80, 0.08), 0 1px 1.5px 0 rgba(0, 0, 0, 0.07),
      0 1px 2px 0 rgba(0, 0, 0, 0.08);
  }

  .submit:hover {
    color: #010305 !important;
    font-weight: 700;
    box-shadow: 0 0 0 1px rgba(43, 45, 80, 0.1), 0 2px 5px 0 rgba(43, 45, 80, 0.1), 0 3px 9px 0 rgba(43, 45, 80, 0.08),
      0 1px 1.5px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  }

  .submit:active {
    background-color: #e6e6e6;
    border-color: #dfdfdf;
  }

  .submit:focus {
    outline: 0px dotted;
  }

  .checkbox {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export default LoginComponentStyle;
