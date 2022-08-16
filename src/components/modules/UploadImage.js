import React,{useState, useEffect} from 'react';
import Avatar from 'react-avatar-edit';

const UploadImage = (props) => {
    const [src,setSrc] = useState(null);
    const [preview, setPreview] = useState(null);
    const onClose = () => {
        setPreview(null);
    }
    const onCrop =  view => {
        setPreview(view);
    }
    useEffect(()=> {
        props.event(preview);
    },preview)
    return (
        <div className='upload-image'>
            <Avatar
                width={props.width}
                height= {props.width}
                onCrop={onCrop}
                onClose = {onClose}
                src={src}
            />
            {preview && <img className = {props.type} src={preview} style={{
                width: `${props.width}px`,
                height: `${props.width}px`
            }}/>}
        </div>
    );
};

export default UploadImage;