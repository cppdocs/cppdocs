---
title: "std::system_error::system_error"
source_path: "cpp/error/system_error/system_error"
category: "error"
since: "C++11"
---

Constructs new system error object.

## Declarations
```cpp
system_error( std::error_code ec );
```
_(since C++11)_

```cpp
system_error( std::error_code ec, const std::string& what_arg );
```
_(since C++11)_

```cpp
system_error( std::error_code ec, const char* what_arg );
```
_(since C++11)_

```cpp
system_error( int ev, const std::error_category& ecat );
```
_(since C++11)_

```cpp
system_error( int ev, const std::error_category& ecat,
const std::string& what_arg );
```
_(since C++11)_

```cpp
system_error( int ev, const std::error_category& ecat,
const char* what_arg );
```
_(since C++11)_

```cpp
system_error( const system_error& other ) noexcept;
```
_(since C++11)_

## Parameters
- `ec`: error code
- `ev`: underlying error code in the enumeration associated with ecat
- `ecat`: the category of error
- `what_arg`: explanatory string
- `other`: another system_error to copy

## Example
```cpp
#include <iostream>
#include <system_error>
 
int main()
{
    try
    {
        throw std::system_error(EDOM, std::generic_category(), "FIX ME");
    }
    catch (const std::system_error& ex)
    {
        std::cout << "code:    [" << ex.code() << "]\n"
                     "message: [" << ex.code().message() << "]\n"
                     "what:    [" << ex.what() << "]\n";
    }
}
```
