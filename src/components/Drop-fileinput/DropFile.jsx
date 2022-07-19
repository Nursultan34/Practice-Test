import React,{useRef,useState} from 'react';
import './DropFile.css';
import {ImageConfig} from '../../config/ImageConfig';
import upLoading from '../../assets/bxs-cloud-upload.svg';


const DropFile = (props) => {
  const wrapperRef = useRef(null);
  const [files,setFiles] = useState([])

  const onDrager = () => wrapperRef.current.classList.add('dragover');
  const onDragerRemove = () => wrapperRef.current.classList.remove('dragover');
  const onDragerDrop = () => wrapperRef.current.classList.remove('dragover');


  const onFileDrop = (e) => {
      const newFile = e.target.files[0];
      if(newFile) {
          const updateList  = [...files,newFile];
          setFiles(updateList)
          props.onFileChange(updateList)
      }
  }
  const fileRemove = (file) => {
        const updateList = [...files];
        updateList.splice(files.indexOf(files),1)
        setFiles(updateList)
        props.onFileChange(updateList)
  }
  return (
    <>
    <div
      className="drop-file-input"
      ref={wrapperRef}
      onDrag={onDrager}
      onDragerRemove={onDragerRemove}
      onDragerDrop={onDragerDrop}>
      <div className="drop-file-label">
        <img src={upLoading} alt="" />
        <p>Загрузите файл</p>
      </div>
      <input type="file" value="" onChange={onFileDrop} />
    </div>
    {
        files.length > 0 ? (
            <div className="drop-file-preview">
                <p className='title'>
                    Готов к загрузке
                </p>
                {
                    files.map((item,index) => (
                        <div key={index} className="item">
                           <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['defualt']}  alt="" />
                           <div className="info">
                               <p>{item.name}</p>
                               <p>{item.size}</p>
                           </div>
                           <span className="delete" onClick={() => fileRemove(item)}>
                               x
                           </span>
                        </div>
                    ))
                }
            </div>
        ):null
    }
    </>
  );
};

export default DropFile;
