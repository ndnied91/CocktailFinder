import styled from 'styled-components';

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 3rem;
    .btn {
      margin-bottom: 0.5rem;
    }
  }
  .img {
    border-radius: var(--borderRadius);
  }
  .drink-info {
    padding-top: 2rem;
    color: #36454f;
  }
  .drink p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 0.5rem;
  }

  .drink p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 0.5rem;
  }

  .ins {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    ${'' /* margin-bottom: 0.5rem; */}
  }

  .drink-details {
    font-weight: 300;
  }

  .drink-instructions {
    text-transform: none;
    margin-right: 0.1rem;
    font-weight: 300;
    display: inline-block;
  }

  .container {
    margin: 10px;
    display: flex;
  }

  .directions {
    display: flex;
    line-height: normal;
  }

  .favorites {
    display: flex;
    align-items: center;
  }

  .breakLine {
    display: none;
  }

  .title-container {
    display: flex;
    justify-content: left;
    align-items: center;
    padding-bottom: 10px;
  }

  .btn {
    margin-top: 40px;
    width: 75%;
  }

  .main {
    display: grid;
    place-items: center;
  }
  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 3fr 3fr;
      gap: 5rem;
      align-items: center;
      background: var(--grey-100);

      ${'' /* update */}
      ${'' /* height: 60vh; */}
      padding: 30px;
      box-shadow: 10px 10px 14px -2px rgba(0, 0, 0, 0.38);
      -webkit-box-shadow: 10px 10px 14px -2px rgba(0, 0, 0, 0.38);
      -moz-box-shadow: 10px 10px 14px -2px rgba(0, 0, 0, 0.38);
    }
    .drink-info {
      padding-top: 0px;
      display: flex;
      flex-direction: column;
      ${'' /* height: 40vw; */}
    }

    .drink-title {
      font-size: 40px;
    }

    .breakLine {
      background: var(--grey-300);
      height: 1px;
      width: 100%;
      margin-top: 15px;
      margin-bottom: 15px;
      display: block;
    }

    .border {
      position: absolute;
      left: 50%;
      width: 1px;
      height: 25rem;
      background: var(--grey-300);
      ${'' /* transform: translateY(-9%); */}
    }
  }

  @media (max-width: 400px) {
    .btn {
      width: 100%;
      margin-top: 25px;
    }
  }
`;

export default Wrapper;
