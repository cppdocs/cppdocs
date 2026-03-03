---
title: "std::basic_ostream<CharT,Traits>::basic_ostream"
source_path: "cpp/io/basic_ostream/basic_ostream"
category: "io"
since: "C++11"
---

1) Constructs the basic_ostream object, assigning initial values to the base class by calling [basic_ios::init(sb)](/cpp/io/basic_ios/init/).

## Declarations
```cpp
explicit basic_ostream( std::basic_streambuf<CharT, Traits>* sb );
```

```cpp
protected:
basic_ostream( const basic_ostream& rhs ) = delete;
```
_(since C++11)_

```cpp
protected:
basic_ostream( basic_ostream&& rhs );
```
_(since C++11)_

## Parameters
- `sb`: streambuffer to use as output sequence
- `rhs`: basic_ostream to initialize from

## Notes
Because [basic_ios::init(sb)](/cpp/io/basic_ios/init/) sets badbit when sb is a null pointer, and because [basic_ostream::sentry](/cpp/io/basic_ostream/sentry/) does nothing if the stream is already in a failed state, writing to a stream constructed from a null pointer sb is a no-op.

## Example
```cpp
#include <iostream>
#include <sstream>
#include <utility>
 
int main()
{
    // ERROR: copy ctor is deleted
//  std::ostream myout(std::cout);
 
    // OK: shares buffer with cout
    std::ostream myout(std::cout.rdbuf());
 
    // ERROR: move constructor is protected
//  std::ostream s2(std::move(std::ostringstream() << 7.1));
 
    // OK: move ctor called through the derived class
    std::ostringstream s2(std::ostringstream() << 7.1);
    myout << s2.str() << '\n';
 
    std::ostream dev_null{nullptr}; // see Notes above
    dev_null << "no-op";
}
```
