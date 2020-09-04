const deduplicate = (array) => {
    // Filter the incoming array
    return array.filter(
        function(item, index) {
            // Only include member in result, if this is the first occurence
            return (array.indexOf(item) === index);
        }
    );
};

module.exports = deduplicate;