import styled from 'styled-components';

const ChartProgressStyle = styled.div`
  width: 97vw;

  .spinnerloading {
    color: white;
  }

  .progressChart {
    margin: 5px;
  }

  .row {
    margin-top: 2rem;
    width: 42rem;
  }

  .progress-bar {
    color: rgba(275, 275, 275, 1);
  }

  .progress-bar:hover {
    color: black;
    transition: 0.5s;
    cursor: pointer;
  }

  .card-title {
    color: ${(props) => props.theme.colors.chart.text};
  }

  span {
    color: ${(props) => props.theme.colors.chart.text};
    font-weight: 600 !important;
    font-size: 0.83333rem;
  }

  .success {
    background-image: ${(props) => props.theme.colors.status.success} !important;
    border-right: 4px solid #fff !important;
    font-weight: bolder;
    font-size: 0.8rem;
  }

  .warning {
    background-image: ${(props) => props.theme.colors.status.warning} !important;
    border-right: 4px solid #fff !important;
    font-weight: bolder;
    font-size: 0.8rem;
  }

  .info {
    background-image: ${(props) => props.theme.colors.status.info};
    border-right: 4px solid #fff !important;
    font-weight: bolder;
    font-size: 0.8rem;
  }

  .danger {
    background-image: ${(props) => props.theme.colors.status.danger} !important;
    border-right: 4px solid #fff !important;
    font-weight: bolder;
    font-size: 0.8rem;
  }

  .pending {
    background-color: ${(props) => props.theme.colors.status.pending} !important;
    font-weight: bolder;
    font-size: 0.8rem;
  }

  .dot {
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 50%;
    display: inline-block;
    margin-right: 0.5rem;
  }

  .success-color {
    background-image: ${(props) => props.theme.colors.status.success} !important;
  }

  .warning-color {
    background-image: ${(props) => props.theme.colors.status.warning} !important;
  }

  .info-color {
    background-image: ${(props) => props.theme.colors.status.info};
  }

  .danger-color {
    background-image: ${(props) => props.theme.colors.status.danger} !important;
  }

  .pending-color {
    background-color: ${(props) => props.theme.colors.status.pending} !important;
  }
`;

export default ChartProgressStyle;
