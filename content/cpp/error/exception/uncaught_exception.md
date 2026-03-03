---
title: "std::uncaught_exception, std::uncaught_exceptions"
source_path: "cpp/error/exception/uncaught_exception"
header: "<exception>"
category: "error"
---

1) Detects if the current thread has a live exception object, that is, an exception has been thrown or rethrown and not yet entered a matching catch clause, [std::terminate](/cpp/error/terminate/) or [std::unexpected](/cpp/error/unexpected/). In other words, std::uncaught_exception detects if [stack unwinding](/cpp/language/throw/#Stack_unwinding) is currently in progress.

## Declarations
```cpp
bool uncaught_exception() throw();
```
_(until C++11)_

```cpp
bool uncaught_exception() noexcept;
```
_(since C++11) (deprecated in C++17) (removed in C++20)_

```cpp
int uncaught_exceptions() noexcept;
```
_(since C++17) (constexpr since C++26)_

## Notes
An example where int-returning uncaught_exceptions is used is the [boost.log](https://www.boost.org/doc/libs/release/libs/log/doc/html/index.html) library: the expression BOOST_LOG(logger) << foo(); first creates a guard object and records the number of uncaught exceptions in its constructor. The output is performed by the guard object's destructor unless foo() throws (in which case the number of uncaught exceptions in the destructor is greater than what the constructor observed).

[std::experimental::scope_fail](/cpp/experimental/scope_fail/) and [std::experimental::scope_success](/cpp/experimental/scope_success/) in LFTS v3 rely on the functionality of uncaught_exceptions, because their destructors need to do different things that depend on whether is called during stack unwinding.

## Example
```cpp
#include <exception>
#include <iostream>
#include <stdexcept>
 
struct Foo
{
    char id{'?'};
    int count = std::uncaught_exceptions();
 
    ~Foo()
    {
        count == std::uncaught_exceptions()
            ? std::cout << id << ".~Foo() called normally\n"
            : std::cout << id << ".~Foo() called during stack unwinding\n";
    }
};
 
int main()
{
    Foo f{'f'};
 
    try
    {
        Foo g{'g'};
        std::cout << "Exception thrown\n";
        throw std::runtime_error("test exception");
    }
    catch (const std::exception& e)
    {
        std::cout << "Exception caught: " << e.what() << '\n';
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 70 | C++98 | the exception specification of uncaught_exception() was missing | specified as throw() |

## See also
- [terminate](/cpp/error/terminate/)
- [exception_ptr](/cpp/error/exception_ptr/)
- [current_exception](/cpp/error/current_exception/)
- [std::exception_ptr](/cpp/error/exception_ptr/)
