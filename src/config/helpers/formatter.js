export class Formatter {
    static currency(value){
        return Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(value)
    }
}