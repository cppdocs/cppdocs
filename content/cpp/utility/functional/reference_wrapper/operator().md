---
title: "std::reference_wrapper<T>::operator()"
source_path: "cpp/utility/functional/reference_wrapper/operator"
category: "utility"
---

Calls the [Callable](/cpp/named_req/callable/) object, reference to which is stored, as if by [INVOKE](/cpp/utility/functional/)([get()](/cpp/utility/functional/reference_wrapper/get/), [std::forward](/cpp/utility/forward/)<ArgTypes>(args)...). This function is available only if the stored reference points to a [Callable](/cpp/named_req/callable/) object.

## Declarations
```cpp
template< class... ArgTypes >
typename std::result_of<T&(ArgTypes&&...)>::type
operator() ( ArgTypes&&... args ) const;
```
_(since C++11) (until C++17)_

```cpp
template< class... ArgTypes >
std::invoke_result_t<T&, ArgTypes...>
operator() ( ArgTypes&&... args ) const noexcept(/* see below */);
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `args`: arguments to pass to the called function

## Return value
The return value of the called function.

## Example
```cpp
#include <functional>
#include <iostream>
 
void f1()
{
    std::cout << "reference to function called\n";
}
 
void f2(int n)
{
    std::cout << "bind expression called with " << n << " as the argument\n";
}
 
int main()
{
    std::reference_wrapper<void()> ref1 = std::ref(f1);
    ref1();
 
    auto b = std::bind(f2, std::placeholders::_1);
    auto ref2 = std::ref(b);
    ref2(7);
 
    auto c = []{ std::cout << "lambda function called\n"; };
    auto ref3 = std::ref(c);
    ref3();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3764 | C++17 | operator() is not noexcept | propagate noexcept |

## See also
- [getoperator T&](/cpp/utility/functional/reference_wrapper/get/)
