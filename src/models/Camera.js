module.exports = (sequelize, DataTypes) => {
    const Camera = sequelize.define('Camera', {
        camera_name: DataTypes.STRING,//ชื่อรุ่นกล้อง
        camera_title: DataTypes.STRING, //ประเภทกล้อง
        camera_sizeca:DataTypes.STRING,//ขนาดของเลนกล้อง  
        camera_catagori: DataTypes.STRING,//ยี่ห้อกล้อง
        camera_price: DataTypes.STRING,   //ราคากล้อง
    })
    return Camera
}