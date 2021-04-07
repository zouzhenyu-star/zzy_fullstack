# 手写更加精准的 数据类型判断函数

- typeof 可以正确识别：Undefined、Boolean、Number、String、Symbol、Function 、Object 这7种基本数据类型的数据，
但是对于其他的都会认为是 object，比如 Null、Date 等，所以通过 typeof 来判断数据类型会不准确。
但是可以使用 Object.prototype.toString 实现。
