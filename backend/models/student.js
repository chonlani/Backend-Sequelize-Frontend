module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define(
        "Student", // ชื่อ Model
        {
            name: {
                type: DataTypes.STRING,
            },
            age: {
                type: DataTypes.INTEGER,
            },
            number_phone: {
                type: DataTypes.STRING(10),
            },
            
        },

        {   
            timestamps: false,
            tableName: "student",

        }
    ); return Student
    
}
