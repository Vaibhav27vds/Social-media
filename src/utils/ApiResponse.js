class ApiResponse {
    constructor(
        statusCode,
        data,
        message = 'Success'
    ){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

 // Status codes: 
// Informational response : (100-199)
// Success response : (200-299)
// Redirection messages: (300-399)
// Client error responses : (400-499)
// Server error message : (500-599)

//