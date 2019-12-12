import  React  from  'react';
import  Verificode  from  '../vertification/vertication.component';
import  Codebox  from  '../codeBox/codeBox.component';
import MyUpload from '../Upload/MyUpload.component';
import  { Input }  from  'antd';
import  axios  from  'axios';

import './jobform.component.style.css';

class  JobForm  extends  React.Component    {
    constructor(props){
        super(props);
        //1
        this.refreshCode = this.refreshCode.bind(this);
        this.state = {
                title: props.title,
                area: props.area,
                first_name: '',
                last_name: '',
                email: '',
                description: '',
                uploadfile: '',
                code:[]  //this  variable  is  used  to  store  the  vertification  code
        }
    }

    refreshCode(){
            this.GetVerifiCode();
    }

    handleChange  =  async  event  =>  {
        //event.target  will  end  up  being  the  input  element  itself.  And  we  want  to  pull  off  the  'name  and  value'
        const  target  =  event.target;
        const  value  =  target.value;
        const  name  =  target.name;
        this.setState({
                [name]:  value
            });
    };

    genRandomString  =  len  =>  {
            const  text  =  'abcdefghijklmnopqrstuvwxyz0123456789';
            const  rdmIndex  =  text  =>  Math.random()  *  text.length  |  0;
            let  rdmString  =  '';        
            for(;  rdmString.length  <  len;  rdmString  +=  text.charAt(rdmIndex(text)));
            return  rdmString;
    }

    /* componentDidMount()
    {
        this.GetVerifiCode();
    }  */

    handleSubmit  =  async  event  =>{
            event.preventDefault();
            var  data  =  {
                    title:  this.state.title,
                    area:  this.state.area,
                    first_name:  this.state.first_name,
                    last_name:this.state.last_name,
                    email:  this.state.email,
                    description:this.state.description,
            }
            console.log(data);
            axios({
                    method:  'post'  ,
                    url:  'http://localhost:3000/job/add'  ,
                    data:  data
            })
            .then(function  (response)  {
                    console.log(response);
                })
            .catch(function  (error)  {
                    console.log(error);
                });
            
    };

    handleChange  =  event  =>  {
            //event.target  will  end  up  being  the  input  element  itself.  And  we  want  to  pull  off  the  'name  and  value'
            const  target  =  event.target;
            const  value  =  target.value;
            const  name  =  target.name;
            this.setState({
                    [name]:  value
                });
    };

    handleCheckbox  =  event  =>  {
        const{name,value}  =  event.target;
        if(!this.state[name].includes(value)){
            this.setState({[name]:this.state[name].concat([value])}) }//语法:this.state[name]
        else{
            this.setState({[name]:this.state[name].filter(checkbox => (checkbox != value))})
    }
    }

    render() {
        const { title, area, first_name, last_name, email, description, uploadfile } = this.state;
        const ownStyle={
            width: 'calc(100% - 10px)',
            height: '45px',
            margin: '15px 0',
            backgroundColor: '#ffffff'
        };
        const {code}=this.state;
        
        return(
            <div>

                <form onSubmit={this.handleSubmit}>
                    <p className='fh_rec_det_apply_title'>{title}</p>
                    <hr />
                    <div style={{'padding-top': '30px'}} />
                    <span className='fh_rec_det_apply_city'>City:</span><span className='fh_rec_det_apply_area'>{area}</span>
                    <br />
                    <div style={{'padding-top': '32px'}} />
                    <span className='fh_rec_det_apply_label'>Name</span><span className='required_mark'>*</span><br/>
                        <div className='ft_rec_single_row'>
                            <Input style={{'max-width':'242px', margin: '10px 0 35px 0'}} name='first_name' value={first_name} onChange={this.handleChange} required placeholder='First Name' size='large'></Input>
                            <Input style={{'max-width':'242px', margin: '10px 0 35px 0'}} name='last_name' value={last_name} onChange={this.handleChange} required placeholder='Last Name' size='large'></Input>
                        </div>
                    
                    <span className='fh_rec_det_apply_label'>Email</span><span className='required_mark'>*</span><br/>
                        <Input style={{'max-width':'497px', margin: '10px 0 35px 0'}} name='email' value={email} onChange={this.handleChange} required placeholder='Email Address' size='large'></Input>
                    
                    <div>
                        <span className='fh_rec_det_apply_label'>Description</span>
                        <br />
                        <div style={{'padding-top':'10px'}} />
                        <textarea className='ft_rec_textarea' name='description' value={description} onChange={this.handleChange}/>
                    </div>

                    <div style={{'padding-top': '32px'}} />

                    <span className='fh_rec_det_apply_label'>Upload Resume</span><span className='required_mark'>*</span><br/>
                    <div style={{'padding-top': '17px'}} />
                    <MyUpload uploadname='Add a File' />

                    <div className='ft_rec_verificode' /* style={{width:'200px',height:'auto'}} */>
                        <div style={{width:'150px', height:'auto'}}>
                            <Verificode ownStyle={ownStyle} onGetRefresh={this.refreshCode} data={code}></Verificode>
                        </div>
                        <div style={{width:'200px',height:'auto'}}>
                            <Codebox />
                        </div>
                    </div>

                    <hr />
                        
                    <button type='submit' className='fh_rec_det_apply_submit_button'>Submit</button>
                </form>

            </div>
        );
    }
}
export default JobForm;