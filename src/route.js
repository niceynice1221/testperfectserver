const UserController = require('./controllers/UserController')
const CameraController = require('./controllers/CameraController')
const UserAuthenController = require('./controllers/UserAuthenController');
const isAuthenController = require('./authen/isAuthenController')

module.exports = (app) => {
    app.post('/user', UserController.create)//สร้างผู้ใช้
    
    app.put('/user/:userId', UserController.put)//แก้ไขผู้ใช้
    
    app.delete('/user/:userId', UserController.remove)//ลบผู้ใช้
    
    app.get('/user/:userId', UserController.show)//ดูผู้ใช้
    
    app.get('/users', isAuthenController, UserController.index)//ดูผู้ใช้ทั้งหมด

    //camera
    app.post('/camera', CameraController.create)//สร้างข้อมูลกล้อง
    
    app.put('/camera/:cameraId', CameraController.put)//แก้ไขข้อมูลกล้อง
    
    app.delete('/camera/:cameraId', CameraController.remove)//ลบข้อมูลกล้อง
    
    app.get('/camera/:cameraId', CameraController.show)//ดูข้อมูลกล้อง
    
    app.get('/cameras', CameraController.index)//ดูข้อมูลกล้องทั้งหมด

    //login
    app.post('/login', UserAuthenController.login)//login ก่อนเข้าใช้งาน
}