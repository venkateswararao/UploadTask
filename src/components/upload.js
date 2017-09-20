import React from "react";
import { Form, FormGroup, ControlLabel,Modal, FormControl, Button } from 'react-bootstrap';
import { Link,  hashHistory } from 'react-router';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import $ from "jquery";
import Dropzone from 'react-dropzone';
import CircularProgressbar from 'react-circular-progressbar';
import XLSX from 'xlsx';



export default class uploadjob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    uploaddata:[],
	loading:false,
	disabled:false,	
    files: []
 
    };
  }


  componentDidMount()
  {
    
  }

    
    onDrop(files,e) {
   		
	this.setState({uploaddata:[],loading:true,files,showmessage:false})
	  var self = this;
	    var result=[];
	   var files = files;
     var reader = new FileReader();
    reader.onload = function(upload) {
      var data = upload.target.result;
     console.log("data: "+data);
      var workbook = XLSX.read(data, {type : 'binary'});

      // Here is your object
      var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames[0]]);
      var json_object = JSON.stringify(XL_row_object);
	
     
        if(XL_row_object )
      XL_row_object.map((row,key) => {
	   var data = {};
	    data .Technology= row.Technology;
		data.Region= row.Region;
        data.Entity= row.Entity;
        data .Country=row.Country ;
        data.NQCID =row.NQCID ;
        data.NQC=row.NQConly; 
        data.BPCID=row.BPCID;
       result.push(data);
		
      })
     console.log("data: "+JSON.stringify(result));
	 
	 self.setState({uploaddata:result,loading:false},() => {
	
 
    });
     
    };
    reader.readAsBinaryString(files[0]);
   
	 
   }
   
   cancel()
   {
     this.setState({uploaddata:[],loading:false})
   }
    save()
	{
	 this.setState({disabled: true});
	 
	  var data = this.state.uploaddata;
       fetch("/api/users/uploadfile/add", {
       method: 'POST',
       headers: {
        'Content-Type': 'application/json'
      },
      body :JSON.stringify(data)
    }).then(function(response){
        response.json().then(function(data) {
         if(response.ok){
           this.setState({disabled: false,loading:false});
		   
            
        }
       else{
       
       //display error
      }
    }.bind(this))
  }.bind(this))
  .catch(function(error){
    console.log("error1111"+error)
   });
	  
	}
	
	

  render() {
    return (
	      <div>
	      <div className="row dragimg" id="drop" style={{marginTop:35, marginBottom: 10,marginLeft:55}}>
            <section>
              <div className="dropzone" style={{cursor:"pointer"}}>
                <Dropzone onDrop={this.onDrop.bind(this)} ref = "drop"   multiple="false">
                  <p style={{textAlign: "center", marginTop: 20}}>Choose Or Drag and Drop File Here</p>
                </Dropzone>

              </div>
            </section>
            </div>   
           <div>
         {this.state.loading ? (
           <div> loading ... </div>
              ):(<div></div>)}
			  </div>

            <div className="row">
        <div className="table-responsive">
		{(this.state.uploaddata.length>0)?
			 (
			 <div>
          <table className="table table-striped" id="datatable">
            <thead>
              <tr>
			  <th>Technology</th>
			   <th>Region</th>
				<th>Entity</th>
                <th>Country</th>
                <th>NQC ID</th>
               <th>NQC </th>
               <th>BPC ID</th>
               </tr>
            </thead>
            <tbody>
			
			 
			{ this.state.uploaddata.map((data)=>{
                return(
                  <tr >
				   <td>{data.Technology}</td>
				   <td>{data.Region}</td>
				   <td>{data.Entity}</td>
				    <td>{data.Country}</td>
                    <td>{data.NQCID}</td>
					<td>{data.NQC}</td>
					<td>{data.BPCID}</td>
				    </tr>
                  )
              })}
			 
            </tbody>
			
          </table>
            <div style={{margin:'0 auto',textAlign: 'center'}}>
	  <button style={{marginTop: "5px"}} className="btn btn-primary" onClick={this.save.bind(this)}  disabled={this.state.disabled} >Save</button>
		   
		    <button style={{marginLeft: "25px",marginTop: "4.5px"}} onClick={this.cancel.bind(this)} className="btn btn-danger">Cancel</button>

			</div>
			
			</div>
			
           ):(null)
			  }	
 				  
       </div>
	   </div>
	   </div>
);

}
}


