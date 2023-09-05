import React, { useRef} from 'react';
import BuilderControl from '../components/contentbuilder/buildercontrol';
import {useHistory, useLocation} from 'react-router-dom';


const Edit = ({queryPageParam}) => {
    const history = useHistory();
    const callSaveRef = useRef();
    const callSaveAndFinishRef = useRef();


    const onSave = (html) => {

    };

    const onSaveAndFinish = (html) => {
        history.push('/');
    };

    const closeBuilder = () => {
        const answer = window.confirm('Do you really want to leave?');
        if (!answer) return;
        history.push('/');
    };


    return (
        <>
            <BuilderControl
                queryPageParam={queryPageParam}
                onSave={onSave}
                onSaveAndFinish={onSaveAndFinish}
                doSave={(f) => (callSaveRef.current = f)}
                doSaveAndFinish={(f) => (callSaveAndFinishRef.current = f)}
            />
            <div className="is-ui" style={{position: 'fixed', right: '30px', bottom: '30px', display: 'flex'}}>
                <button type="button" onClick={() => callSaveRef.current()} style={{width: '85px'}}>
                    Save
                </button>
                <button type="button" onClick={() => callSaveAndFinishRef.current()} style={{width: '120px'}}>
                    Save & Finish
                </button>
                <button type="button" onClick={closeBuilder} style={{width: '85px'}}>
                    Close
                </button>
            </div>
        </>
    );
};

export default Edit;
