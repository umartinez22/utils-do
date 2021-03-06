const { _searchBy, _validateArgs, addConstant } = require("../Helper/index")


class Validator {
    /**
     * Validate if the value inserted is a valid dominican id.
     *
     * @param {string | number} id
     * @returns { boolean }
     */
    isAnIde(id) {
        _validateArgs(id,"the value should be string or number", ["string", "number"])
        const numericId = ("" + id).match(/\d+/gi).join("");
        return numericId.length === 11;
    }

    /**
     * Return the value formatted as a dominican id.
     *
     * @param {string | number} id
     */
    formatToIde(id) {
        const errMsg = "Debe ingresar el valor que sera formateado - formatToIde(string | number)";
        _validateArgs(id, errMsg, ["string", "number"])
        const regex = /\(?(\d{3})\)?[- ]?(\d{7})[- ]?(\d{1})/g;
        const result = ("" + id).replace(regex, "$1-$2-$3");
        return result.length === 13 ? result : undefined;
    }


    /**
     * Validate if the value inserted is a valid dominican telephone.
     *
     * @param {string | number} tel
     * @returns { boolean }
     */
    isATel(tel) {
        _validateArgs(tel, "the value should be string or number", ["string", "number"])
        const numericTel = (""+tel).match(/\d+/gi).join("").match(/^8[0-4]9\d{3}\d{4}$/);
        return numericTel !== null;
    }

    /**
     * Return the value formatted as a dominican id.
     *
     * @param {string | number} id
     */
    formatToTel(tel) {
        const errMsg = "Debe ingresar el valor que sera formateado - formatToIde(string | number)";
        _validateArgs(tel, errMsg, ["string", "number"])
        const regex = /\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})/g;
        const result = ("" + tel).replace(regex, "($1) $2-$3");
        return result.length === 14 ? result : undefined;
    }
}

module.exports = new Validator;