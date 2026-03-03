---
title: "std::overflow_error"
source_path: "cpp/error/overflow_error"
header: "<stdexcept>"
category: "error"
---

Defines a type of object to be thrown as exception. It can be used to report arithmetic overflow errors (that is, situations where a result of a computation is too large for the destination type).

## Declarations
```cpp
class overflow_error;
```

## Parameters
- `what_arg`: explanatory string
- `other`: another exception object to copy

## Return value
*this

## Notes
Because copying std::overflow_error is not permitted to throw exceptions, this message is typically stored internally as a separately-allocated reference-counted string. This is also why there is no constructor taking std::string&&: it would have to copy the content anyway.

Before the resolution of [LWG issue 254](https://cplusplus.github.io/LWG/issue254), the non-copy constructor can only accept [std::string](/cpp/string/basic_string/). It makes dynamic allocation mandatory in order to construct a [std::string](/cpp/string/basic_string/) object.

After the resolution of [LWG issue 471](https://cplusplus.github.io/LWG/issue471), a derived standard exception class must have a publicly accessible copy constructor. It can be implicitly defined as long as the explanatory strings obtained by what() are the same for the original object and the copied object.

## Example
```cpp
#include <iostream>
#include <limits>
#include <stdexcept>
#include <utility>
 
template<typename T, int N>
    requires (N > 0) /*...*/
class Stack
{
    int top_{-1};
    T data_[N];
 
public:
    [[nodiscard]] bool empty() const { return top_ == -1; }
 
    void push(T x)
    {
        if (top_ == N - 1)
            throw std::overflow_error("Stack overflow!");
        data_[++top_] = std::move(x);
    }
 
    void pop()
    {
        if (empty())
            throw std::underflow_error("Stack underflow!");
        --top_;
    }
 
    T const& top() const
    {
        if (empty())
            throw std::overflow_error("Stack is empty!");
        return data_[top_];
    }
};
 
int main()
{
    Stack<int, 4> st;
 
    try
    {
        [[maybe_unused]] auto x = st.top();
    }
    catch (std::overflow_error const& ex)
    {
        std::cout << "1) Exception: " << ex.what() << '\n';
    }
 
    st.push(1337);
    while (!st.empty())
    	st.pop();
 
    try
    {
        st.pop();
    }
    catch (std::underflow_error const& ex)
    {
        std::cout << "2) Exception: " << ex.what() << '\n';
    }
 
    try
    {
        for (int i{}; i != 13; ++i)
            st.push(i);
    }
    catch (std::overflow_error const& ex)
    {
        std::cout << "3) Exception: " << ex.what() << '\n';
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 254 | C++98 | the constructor accepting const char* was missing | added |
| LWG 471 | C++98 | the explanatory strings of std::overflow_error'scopies were implementation-defined | they are the same as that of theoriginal std::overflow_error object |
