---
title: "operator==,!=(std::function)"
source_path: "cpp/utility/functional/function/operator_cmp"
header: "<functional>"
category: "utility"
since: "C++11"
---

Compares a std::function with a null pointer. Empty functions (that is, functions without a callable target) compare equal, non-empty functions compare non-equal.

## Declarations
```cpp
template< class R, class... ArgTypes >
bool operator==( const std::function<R(ArgTypes...)>& f,
std::nullptr_t ) noexcept;
```
_(since C++11)_

```cpp
template< class R, class... ArgTypes >
bool operator==( std::nullptr_t,
const std::function<R(ArgTypes...)>& f ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
template< class R, class... ArgTypes >
bool operator!=( const std::function<R(ArgTypes...)>& f,
std::nullptr_t ) noexcept;
```
_(since C++11) (until C++20)_

```cpp
template< class R, class... ArgTypes >
bool operator!=( std::nullptr_t,
const std::function<R(ArgTypes...)>& f ) noexcept;
```
_(since C++11) (until C++20)_

## Parameters
- `f`: std::function to compare

## Example
```cpp
#include <functional>
#include <iostream>
 
using SomeVoidFunc = std::function<void(int)>;
 
class C
{
public:
    C(SomeVoidFunc void_func = nullptr) : void_func_(void_func)
    {
        if (void_func_ == nullptr) // specialized compare with nullptr
            void_func_ = std::bind(&C::default_func, this, std::placeholders::_1);
        void_func_(7);
    }
 
    void default_func(int i) { std::cout << i << '\n'; };
 
private:
    SomeVoidFunc void_func_;
};
 
void user_func(int i)
{
    std::cout << (i + 1) << '\n';
}
 
int main()
{
    C c1;
    C c2(user_func);
}
```

## See also
- [operator==](/cpp/utility/functional/move_only_function/operator/)
