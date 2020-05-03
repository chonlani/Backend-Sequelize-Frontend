module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define(
        "Student",
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
            timestamp: false,
            tableName: "student",

        }
    ); return Student
    
}