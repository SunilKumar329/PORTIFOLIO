import React from 'react'
import "./Skillpage.css"
const Skillspage = () => {
    const list=[
        {
            "skill":"React js",
            "image":"https://assets-global.website-files.com/5d9bc5d562ffc2869b470941/5e1f8bd1dc3c511ea5a28a56_icon-rect-tech.png"
        },
        {
            "skill":"mongodb",
            "image":"https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png"
        },
        {
            "skill":"nodejs",
            "image":"https://www.mindrops.com/images/nodejs-image.png"
        },
        {
            "skill":"express",
            "image":"https://blog.amt.in/wp-content/uploads/2017/12/e16da876-c2fd-4eb8-ae72-4b193c534938-Edited.png"
        },{
            "skill":"Redux",
            "image":"https://unitedwebsoft.in/uploads/2022/03/34584019_1646639132_React-Redux-tutorials-for-beginners.jpg"
        },
        // {
        //     "skill":"PM2",
        //     "image":"https://res.cloudinary.com/practicaldev/image/fetch/s--WGzh39Aw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yqnbx749hp9u8mjcn3ai.jpg"
        // },
        {
            "skill":"Docker",
            "image":"https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg"
        },
        // {
        //     "skill":"Angular",
        //     "image":"https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
        // },
        {
            "skill":"HTML",
            "image":"https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
        },{
            "skill":"CSS",
            "image":"https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png"
        },{
            "skill":"Javascript",
            "image":"https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg"
        },{
            "skill":"Typescript",
            "image":"https://icons-for-free.com/iconfiles/png/512/vscode+icons+type+typescript-1324451507894042344.png"
        },{
            "skill":"Bootstrap",
            "image":"https://logovectorseek.com/wp-content/uploads/2019/10/bootstrap-logo-vector.png"
        },{
            "skill":"Postman",
            "image":"https://www.openapis.org/wp-content/uploads/sites/3/2020/07/postman-01.svg"
        },{
            "skill":"Git",
            "image":"https://1000logos.net/wp-content/uploads/2020/08/Git-Logo.png"
        },{
            "skill":"mySql",
            "image":"https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg"
        },{
            "skill":"Python",
            "image":"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
        },
        // {
        //     "skill":"Java",
        //     "image":"https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
        // },
        // {
        //     "skill":"AWS Glue",
        //     "image":"https://www.cloudmantra.net/wp-content/uploads/2018/04/AWS_GLue__1_400x260.png"
        // },
        // {
        //     "skill":"Spring",
        //     "image":"https://logodix.com/logo/1614292.png"
        // }
    ]
  return (
    <div className='Skillpage-main'>
      <h3>My Skills</h3>
      <div className='Skill-flex'>
        {list.map((item, index) => (
          <div key={index} className='Skill-item'>
            <img className='Logo-handler' src={item.image} alt={item.skill} />
            {/* <p>{item.skill}</p> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skillspage