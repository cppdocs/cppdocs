---
title: "Handling exceptions"
source_path: "cpp/language/catch"
category: "language"
---

An [exception](/cpp/language/exceptions/) can be handled by a handler.

## Notes
[Stack unwinding](/cpp/language/throw/#Stack_unwinding) occurs while control is transferring to a handler. When a handler becomes active, stack unwinding is already completed.

The exception thrown by the throw expression throw 0 does not match a handler of pointer or pointer-to-member type.

[Exception objects](/cpp/language/throw/#Exception_object) can never have array or function types, therefore a handler of reference to array or function type is never a match for any exception object.

It is possible to write handlers that can never be executed, for example by placing a handler for a final derived class after a handler for a corresponding unambiguous public base class:

Many implementations overly extend the resolution of [CWG issue 388](https://cplusplus.github.io/CWG/issues/388.html) to handlers of reference to non-const pointer types:

## Example
```cpp
#include <iostream>
#include <vector>
 
int main()
{
    try
    {
        std::cout << "Throwing an integer exception...\n";
        throw 42;
    }
    catch (int i)
    {
        std::cout << " the integer exception was caught, with value: " << i << '\n';
    }
 
    try
    {
        std::cout << "Creating a vector of size 5... \n";
        std::vector<int> v(5);
        std::cout << "Accessing the 11th element of the vector...\n";
        std::cout << v.at(10); // vector::at() throws std::out_of_range
    }
    catch (const std::exception& e) // caught by reference to base
    {
        std::cout << " a standard exception was caught, with message: '"
                  << e.what() << "'\n";
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 98 | C++98 | a switch statement can transfer control into a handler | prohibited |
| CWG 210 | C++98 | throw expressions were matched against the handlers | exception objects arematched against the handlers |
| CWG 388 | C++98 | an exception of pointer or pointer to member type couldnot be matched by a const reference to a different type | made matchablewhen convertible |
| CWG 1166 | C++98 | the behavior was unspecified when a handler whosetype is a reference to an abstract class type is matched | abstract class types arenot allowed for handlers |
| CWG 1769 | C++98 | when the type of the handler is a base of the type ofthe exception object, a converting constructor mightbe used for the initialization of the handler parameter | the parameter is copy-initializedfrom the corresponding base classsubobject of the exception object |
| CWG 2093 | C++98 | an exception object of pointer to object type could not match ahandler of pointer to object type through qualification conversion | allowed |

## See also
- [try block](/cpp/language/try/)
- [Throwing exceptions](/cpp/language/throw/)
- [Exception handling](/cpp/error/#Exception_handling)
