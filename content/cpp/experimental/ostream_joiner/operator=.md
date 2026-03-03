---
title: "std::experimental::ostream_joiner<DelimT,CharT,Traits>::operator="
source_path: "cpp/experimental/ostream_joiner/operator"
category: "experimental"
---

1) First, if the private "first element" flag is false, insert the delimiter delim into the output stream os associated with this iterator as if by os << delim;.

## Declarations
```cpp
template< class T >
ostream_joiner& operator=( const T& value );
```
_(library fundamentals TS v2)_

```cpp
ostream_joiner& operator=( const ostream_joiner& other ) = default;
```
_(library fundamentals TS v2) (implicitly declared)_

```cpp
ostream_joiner& operator=( ostream_joiner&& other ) = default;
```
_(library fundamentals TS v2) (implicitly declared)_

## Parameters
- `value`: the object to to be written to the stream
- `other`: the ostream_joiner object to be assigned to this object

## Return value
*this.

## Example
```cpp
#include <experimental/iterator>
#include <iostream>
 
int main()
{
    auto joiner = std::experimental::make_ostream_joiner(std::cout, ", ");
    joiner = "First";
    joiner = "do no harm.";  // prefixes with the delimiter
}
```
