import React, { useState } from 'react';
import Input from 'react-validation/build/input';
import Textarea from 'react-validation/build/textarea';
import Form from 'react-validation/build/form';
import CheckButton from 'react-validation/build/button';
import useAxios from '../hooks/axios.hook';
import { required, minlength, maxlength } from './Authentication/Validation';
import Loader from '../Components/General/Loader';

function CreatePost() {
  const [form, setForm] = useState({ title: '', text: '' });
  const [file, setFile] = useState(null);
  const { request, error, loading } = useAxios();

  const changeHandler = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submitHandler = () => {
    const data = new FormData();
    data.append('title', form.title);
    data.append('text', form.text);
    data.append('file', file);
    request('/main/create', 'post', data);
  };

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h1 className="center-align">{error.message}</h1>;
  }

  return (
    <div className="row">
      <div className="col s8 offset-s2">
        <div className="card">
          <div className="card-content white-text">
            <span className="card-title  center-align blue-text">
              Posting...
            </span>
            <Form onSubmit={submitHandler}>
              <div className="row">
                <div className="input-field col s6 offset-s3">
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    className="validate"
                    value={form.title}
                    validations={[required, minlength, maxlength]}
                    onChange={changeHandler}
                  />
                  <label htmlFor="title" className="active">
                    Post title
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6 offset-s3">
                  <Textarea
                    id="textarea1"
                    name="text"
                    value={form.text}
                    className="materialize-textarea"
                    validations={[required, minlength]}
                    onChange={changeHandler}
                  />
                  <label htmlFor="textarea1" className="active">
                    Post description
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="file-field input-field col s6 offset-s3">
                  <div className="btn blue lighten-2">
                    <span>Image</span>
                    <input
                      type="file"
                      name="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s6 offset-s3 center-align">
                  <CheckButton
                    type="submit"
                    className="btn btn-medium blue lighten-2"
                  >
                    Add post
                  </CheckButton>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
