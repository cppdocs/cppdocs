---
title: "std::future_error"
source_path: "cpp/thread/future_error"
header: "<future>"
category: "thread"
since: "C++11"
---

The class std::future_error defines an exception object that is thrown on failure by the functions in the thread library that deal with asynchronous execution and shared states ([std::future](/cpp/thread/future/), [std::promise](/cpp/thread/promise/), etc). Similar to [std::system_error](/cpp/error/system_error/), this exception carries an error code compatible with [std::error_code](/cpp/error/error_code/).

## Declarations
```cpp
class future_error;
```
_(since C++11)_

## Example
```cpp
#include <future>
#include <iostream>
 
int main()
{
    std::future<int> empty;
    try
    {
        int n = empty.get(); // The behavior is undefined, but
                             // some implementations throw std::future_error
    }
    catch (const std::future_error& e)
    {
        std::cout << "Caught a future_error with code \"" << e.code()
                  << "\"\nMessage: \"" << e.what() << "\"\n";
    }
}
```

## See also
- [future_errc](/cpp/thread/future_errc/)
