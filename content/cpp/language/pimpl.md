---
title: "PImpl"
source_path: "cpp/language/pimpl"
category: "language"
---

"Pointer to implementation" or "pImpl" is a C++ [programming technique](#External_links) that removes implementation details of a class from its object representation by placing them in a separate class, accessed through an opaque pointer:

## Notes
This section is incompleteReason: note connection to value-semantic polymorphism

## Example
```cpp
// ----------------------
// interface (widget.hpp)
#include <experimental/propagate_const>
#include <iostream>
#include <memory>
 
class widget
{
    class impl;
    std::experimental::propagate_const<std::unique_ptr<impl>> pImpl;
public:
    void draw() const; // public API that will be forwarded to the implementation
    void draw();
    bool shown() const { return true; } // public API that implementation has to call
 
    widget(); // even the default ctor needs to be defined in the implementation file
              // Note: calling draw() on default constructed object is UB
    explicit widget(int);
    ~widget(); // defined in the implementation file, where impl is a complete type
    widget(widget&&); // defined in the implementation file
                      // Note: calling draw() on moved-from object is UB
    widget(const widget&) = delete;
    widget& operator=(widget&&); // defined in the implementation file
    widget& operator=(const widget&) = delete;
};
 
// ---------------------------
// implementation (widget.cpp)
// #include "widget.hpp"
 
class widget::impl
{
    int n; // private data
public:
    void draw(const widget& w) const
    {
        if (w.shown()) // this call to public member function requires the back-reference 
            std::cout << "drawing a const widget " << n << '\n';
    }
 
    void draw(const widget& w)
    {
        if (w.shown())
            std::cout << "drawing a non-const widget " << n << '\n';
    }
 
    impl(int n) : n(n) {}
};
 
void widget::draw() const { pImpl->draw(*this); }
void widget::draw() { pImpl->draw(*this); }
widget::widget() = default;
widget::widget(int n) : pImpl{std::make_unique<impl>(n)} {}
widget::widget(widget&&) = default;
widget::~widget() = default;
widget& widget::operator=(widget&&) = default;
 
// ---------------
// user (main.cpp)
// #include "widget.hpp"
 
int main()
{
    widget w(7);
    const widget w2(8);
    w.draw();
    w2.draw();
}
```
