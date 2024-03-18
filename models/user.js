module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    uid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    uFullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 30],
          msg: "Full name must be between 1 and 30 characters",
        },
        is: {
          args: /^[a-zA-Z\s]+$/,
          msg: "Full name must contain only English letters and spaces",
        },
      },
    },
    uPhoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isPhoneNumberFormat(value) {
          if (!/^[\d-]+$/.test(value)) {
            throw new Error(
              'Invalid phone number format. Must contain only digits or digits with "-"'
            );
          }
        },
      },
    },
    uPicture: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isPictureUrl: function (value) {
          if (!/^https?:\/\/.*\.(png|jpg|jpeg|gif)$/i.test(value)) {
            throw new Error("Invalid picture URL");
          }
        },
      },
    },
    uGender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    uTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return User;
};
