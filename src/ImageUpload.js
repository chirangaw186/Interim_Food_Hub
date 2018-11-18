import React, { Component } from 'react';


class ImageUpload extends Component {

  constructor(props){
      super(props);

      this.state={
          selectedFile: null,
          loaded: 0
      }

      this.handleSelectedFiles=this.handleSelectedFiles.bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }

  handleSelectedFiles(event){
          this.setState({
            selectedFile: event.target.files[0],
            loaded:1
          });
          //console.log(event.target.files[0]);
  }

  handleUpload(){
    const data = new FormData();
    data.append('file',this.state.selectedFile);
    //console.log(data)

    fetch('http://localhost:4000/index/imageup',{
      mode:"no-cors",
      
      method:"POST",
  
      body:data
    })

    console.log(this.state.selectedFile)
  }


  render() {
    return (
      // <div className="container">
      //     <form  >
      //     <div className="input-group">
      //       <div className="input-group-prepend">
      //           <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
      //       </div>
      //       <div className="custom-file">
      //         <input type="file" className="custom-file-input" id="inputGroupFile01" name="MyImage" aria-describedby="inputGroupFileAddon01" onChange={this.handleSelectedFiles}/>

      //         <label className="custom-file-label">Choose file</label>
      //       </div>
      //       </div>

      //           <div>
      //           <br/>
      //           <br/>
      //             <button onClick={this.handleUpload} >Upload</button>
      //          </div>
      //          </form>
      // </div>


      <div className="container">

      
            <div className="col-sm-4">
            <input type="file" className="form-control" onChange={this.handleSelectedFiles}/>
        </div>
 
        <br/>
        <br/>
        <div className="col-sm-4">
        <button className="btn btn-primary" onClick={this.handleUpload}>Upload</button>
        

        </div>
      
      </div>




    );
  }
}

export default ImageUpload;
