import React from 'react';
import { useFormik } from 'formik';

const FormularioCanciones = (props) => {

  const formik = useFormik({
    initialValues: {
      song: undefined,
      artist: undefined,
      album: undefined,
      year: 2000,
      country: undefined
    },
    onSubmit: values => {
      props.guardar(values);
    },
  });
  
  return (
      <div>
        <div className="text-right">
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Add
          </button>
        </div>
        <br/>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add song</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="form-inline">
                  <input
                  id="song"
                  name="song"
                  type="text"
                  className="form-control mb-2 mr-sm-2" placeholder="Song"
                  onChange={formik.handleChange}
                  value={formik.values.song}
                  />
                  <input
                  id="artist"
                  name="artist"
                  type="text"
                  className="form-control mb-2 mr-sm-2" placeholder="Artist"
                  onChange={formik.handleChange}
                  value={formik.values.artist}
                  />
                  <input
                  id="album"
                  name="album"
                  type="text"
                  className="form-control mb-2 mr-sm-2" placeholder="Album"
                  onChange={formik.handleChange}
                  value={formik.values.album}
                  />
                  <input
                  id="year"
                  name="year"
                  type="number"
                  className="form-control mb-2 mr-sm-2" placeholder="Year"
                  onChange={formik.handleChange}
                  value={formik.values.year}
                  />
                  <input
                  id="country"
                  name="country"
                  type="text"
                  className="form-control mb-2 mr-sm-2" placeholder="Country"
                  onChange={formik.handleChange}
                  value={formik.values.country}
                  />
                </form>
              </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={formik.handleSubmit}>Save</button>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default FormularioCanciones;