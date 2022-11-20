import React, { useRef, useState, useEffect } from "react";
import Button from "../../atoms/Button";
import Image from "next/image";

const ModalUpload = ({
  isOpen,
  onClose,
  title = "Upload Picture",
  onClickUpload,
  multiple,
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const [imageFiles, setImageFiles] = useState([]);
  const [images, setImages] = useState([]);
  const inputRef = useRef(null);
  const imageMimeType = /image\/(png|jpg|jpeg|gif)/i;

  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // at least one file has been selected so do something
      // handleFiles(e.target.files);
      if (!multiple) {
        const file = e.target.files[0];
        if (!file.type.match(imageMimeType)) {
          alert("Image mime type is not valid");
          return;
        }
        setFile(file);
      } else {
        const { files } = e.target;
        const validImageFiles = [];
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          if (file.type.match(imageMimeType)) {
            validImageFiles.push(file);
          }
        }
        if (validImageFiles.length) {
          setImageFiles(validImageFiles);
          return;
        }
        alert("Selected images are not of valid type!");
      }
    }
  };
  const onButtonClick = () => {
    inputRef.current.click();
  };

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
      if (!multiple) {
        const file = e.dataTransfer.files[0];
        if (!file.type.match(imageMimeType)) {
          alert("Image mime type is not valid");
          return;
        }
        setFile(file);
      } else {
        const { files } = e.dataTransfer;
        const validImageFiles = [];
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          if (file.type.match(imageMimeType)) {
            validImageFiles.push(file);
          }
        }
        if (validImageFiles.length) {
          setImageFiles(validImageFiles);
          return;
        }
        alert("Selected images are not of valid type!");
      }
    }
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  useEffect(() => {
    const images = [],
      fileReaders = [];
    let isCancel = false;
    if (imageFiles?.length) {
      imageFiles.forEach((file) => {
        const fileReader = new FileReader();
        fileReaders.push(fileReader);
        fileReader.onload = (e) => {
          const { result } = e.target;
          if (result) {
            images.push(result);
          }
          if (images.length === imageFiles.length && !isCancel) {
            setImages(images);
          }
        };
        fileReader.readAsDataURL(file);
      });
    }
    return () => {
      isCancel = true;
      fileReaders.forEach((fileReader) => {
        if (fileReader.readyState === 1) {
          fileReader.abort();
        }
      });
    };
  }, [imageFiles]);

  return (
    <>
      <div
        className={
          isOpen
            ? "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            : "hidden"
        }
      >
        <div className="relative w-auto my-6 mx-auto max-w-xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-5">
            {/*header*/}
            <div className="flex items-start justify-between rounded-t mb-2">
              <h3 className="text-2xl">{title}</h3>
              <img
                src="/close-icon.svg"
                alt="close-icon"
                className="cursor-pointer"
                onClick={() => {
                  onClose();
                  setFile(null);
                  setFileDataURL(null);
                  setImageFiles(null);
                  setImages(null);
                }}
              />
            </div>
            {/*body*/}
            <div
              className={
                fileDataURL && !multiple
                  ? "hidden"
                  : "flex flex-col w-full my-6 cursor-pointer"
              }
              onClick={() => onButtonClick()}
            >
              <input
                type="file"
                ref={inputRef}
                className="hidden"
                multiple={multiple}
                onChange={handleChange}
                accept="image/*"
              />
              <div
                className={
                  dragActive
                    ? "flex relative flex-col justify-center items-center border-dashed border-2 border-customTosca w-full h-full bg-silver"
                    : "flex relative flex-col justify-center items-center border-dashed border-2 border-customTosca w-full h-full"
                }
                style={{ minWidth: "500px", minHeight: "344px" }}
              >
                <img src="/add-photo-icon.svg" alt="add-photo-icon" />
                <div className="text-xl">Drag & Drop your Picture here</div>
                <div className="text-base">Or</div>
                <div className="text-customRed text-lg cursor-pointer">
                  Browse file
                </div>
                <div
                  className="absolute w-full h-full top-0 bottom-0 right-0 left-0"
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                ></div>
              </div>
              <div className="flex flex-row justify-between w-full my-2">
                <div className="text-lg text-customGray">
                  Maximum File Size : 5 Mb
                </div>
                <div className="text-lg text-customGray">PNG, JPG or GIF</div>
              </div>
            </div>
            {images && (
              <div className="flex flex-row w-full gap-2 flex-wrap">
                {images.map((item, index) => (
                  <Image
                    src={item}
                    width={50}
                    height={50}
                    alt="preview"
                    key={index}
                  />
                ))}
              </div>
            )}
            {fileDataURL && !multiple ? (
              <Image
                src={fileDataURL}
                width={500}
                height={344}
                style={{ objectFit: "cover" }}
                alt="preview"
              />
            ) : (
              ""
            )}
            {/*footer*/}
            <div className="flex items-center w-full rounded-b mt-4">
              <Button
                type={fileDataURL || images ? "primary" : "outlined"}
                text="UPLOAD"
                onClick={() => onClickUpload()}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={isOpen ? "opacity-75 fixed inset-0 z-40 bg-black" : "hidden"}
      ></div>
    </>
  );
};

export default ModalUpload;
