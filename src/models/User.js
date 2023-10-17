module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: DataTypes.STRING,//email ผู้ใช้
        password: DataTypes.STRING, //password ผู้ใช้
        name: DataTypes.STRING, //ชื่อผู้ใช้
        lastname: DataTypes.STRING,//นามสกุลของผู้ใช้
        status: DataTypes.STRING,//สถานะของผู้ใช้
        type: DataTypes.STRING
    })
    User.prototype.comparePassword = function (password) {
        if (password == this.password) {
            return true
        }
        return false
    }
    User.associate = function (models) { }
    return User
}
