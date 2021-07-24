import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-bottom: 28px;
    border-bottom: 1px dashed #cccccc;
  }

  .icon {
    font-size: 1.5rem;
    margin-right: 15px;
    color: #ff9902;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40%;
    font-size: 1.35rem;
    margin: 0;
    margin-right: 15px;
    color: rgb(70, 70, 70);
    font-weight: 600;

    b {
      font-size: 1rem;
      opacity: 0.8;
      margin-left: 5px;
    }
  }

  .customRange {
    width: 100%;
    margin-right: 15px;

    color: red;
  }

  input[type="range"] {
    width: 100%;
    margin: 10px 0;
    background-color: transparent;
    -webkit-appearance: none;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    background: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 25px;
    width: 100%;
    height: 10px;
    cursor: pointer;
  }
  input[type="range"]::-webkit-slider-thumb {
    margin-top: -11px;
    width: 30px;
    height: 30px;
    background: #ff9902;
    border: 0px solid rgba(255, 82, 82, 0);
    border: 0;
    border-radius: 50px;
    cursor: col-resize;
    -webkit-appearance: none;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #ffffff;
  }
  input[type="range"]::-moz-range-track {
    background: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 25px;
    width: 100%;
    height: 10px;
    cursor: pointer;
  }
  input[type="range"]::-moz-range-thumb {
    width: 30px;
    height: 30px;
    background: #ff9902;
    border: 0px solid rgba(255, 82, 82, 0);
    border: 0;
    border-radius: 50px;
    cursor: pointer;
  }
  input[type="range"]::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 10px 0;
    color: transparent;
    width: 100%;
    height: 10px;
    cursor: pointer;
  }
  input[type="range"]::-ms-fill-lower {
    background: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 50px;
  }
  input[type="range"]::-ms-fill-upper {
    background: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 50px;
  }
  input[type="range"]::-ms-thumb {
    width: 30px;
    height: 30px;
    background: #ff9902;
    border: 0px solid rgba(255, 82, 82, 0);
    border: 0;
    border-radius: 50px;
    cursor: pointer;
    margin-top: 0px;
    /*Needed to keep the Edge thumb centred*/
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: #ffffff;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: #ffffff;
  }
  /*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
how to remove the virtical space around the range input in IE*/
  @supports (-ms-ime-align: auto) {
    /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
    input[type="range"] {
      margin: 0;
      /*Edge starts the margin from the thumb, not the track as other browsers do*/
    }
  }

  p {
    display: flex;
    align-items: center;
    color: rgb(70, 70, 70);
    font-weight: bold;
    margin: 0;
    margin-left: 15px;

    input {
      width: 3.5rem;
      border: none;
      outline: 0;
      color: rgb(70, 70, 70);
      font-weight: bold;

      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
      input[type="number"] {
        -moz-appearance: textfield;
        appearance: textfield;
      }
    }
  }
`;
