---
title: "std::move_only_function::operator()"
source_path: "cpp/utility/functional/move_only_function/operator"
category: "utility"
since: "C++23"
---

Invokes the stored callable target with the parameters args. The /*cv*/, /*ref*/, and /*noex*/ parts of operator() are identical to those of the template parameter of std::move_only_function.

## Declarations
```cpp
R operator()( Args... args ) /*cv*/ /*ref*/ noexcept(/*noex*/);
```
_(since C++23)_

## Parameters
- `args`: parameters to pass to the stored callable target

## Return value
[std::invoke_r](/cpp/utility/functional/invoke/)<R>(/*cv-ref-cast*/(f), [std::forward](/cpp/utility/forward/)<Args>(args)...).

## Example
```cpp
#include <iostream>
#include <functional>
 
void call(std::move_only_function<int() const> f)  // can be passed by value
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
    auto lambda = [&n](){ return n; };
    std::move_only_function<int() const> f = lambda;
    call(std::move(f));
 
    n = 2;
    call(lambda); 
 
    f = normal_function; 
    call(std::move(f));
}
```

## See also
- [operator()](/cpp/utility/functional/function/operator/)
- [operator()](/cpp/utility/functional/reference_wrapper/operator/)
- [invokeinvoke_r](/cpp/utility/functional/invoke/)
- [Callable](/cpp/named_req/callable/)
