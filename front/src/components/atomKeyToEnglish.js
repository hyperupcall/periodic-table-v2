export default function(key) {
    return key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase());
}
