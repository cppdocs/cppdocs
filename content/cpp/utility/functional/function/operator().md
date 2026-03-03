---
title: "std::function<R(Args...)>::operator()"
source_path: "cpp/utility/functional/function/operator"
category: "utility"
since: "C++11"
aliases:
  - "/cpp/utility/functional/function/operator()/"
  - "/cpp/utility/functional/function/operator%28%29/"
---

Invokes the stored callable function target with the parameters args.

## Declarations
```cpp
R operator()( Args... args ) const;
```
_(since C++11)_

## Parameters
- `args`: parameters to pass to the stored callable function target

## Return value
None if R is void. Otherwise the return value of the invocation of the stored callable object.

## Example
```cpp
#include <functional>
#include <iostream>
 
void call(std::function<int()> f) // can be passed by value
{ 
    std::cout << f() << '\n';
}
 
int normal_function()
{
    return 42;
}
 
int main()
{
    int n = 1;
    std::function<int()> f;
    try
    {
        call(f);
    }
    catch (const std::bad_function_call& ex)
    {
        std::cout << ex.what() << '\n';
    }
 
    f = [&n](){ return n; };
    call(f);
 
    n = 2;
    call(f);
 
    f = normal_function;
    call(f);
 
    std::function<void(std::string, int)> g;
    g = [](std::string str, int i) { std::cout << str << ' ' << i << '\n'; };
    g("Hi", 052);
}
```

## See also
- [operator()](/cpp/utility/functional/move_only_function/operator/)
- [operator()](/cpp/utility/functional/reference_wrapper/operator/)
- [bad_function_call](/cpp/utility/functional/bad_function_call/)
- [std::function](/cpp/utility/functional/function/)
- [invokeinvoke_r](/cpp/utility/functional/invoke/)
- [Callable](/cpp/named_req/callable/)
