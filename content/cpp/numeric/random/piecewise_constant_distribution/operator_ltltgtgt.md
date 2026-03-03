---
title: "operator<<,>>(std::piecewise_constant_distribution)"
source_path: "cpp/numeric/random/piecewise_constant_distribution/operator"
category: "numeric"
since: "C++11"
---

Performs stream input and output operations on pseudo-random number distribution d.

## Declarations
```cpp
template< class CharT, class Traits >
friend std::basic_ostream<CharT,Traits>&
operator<<( std::basic_ostream<CharT,Traits>& ost,
const piecewise_constant_distribution& d );
```
_(since C++11)_

```cpp
template< class CharT, class Traits >
friend std::basic_istream<CharT,Traits>&
operator>>( std::basic_istream<CharT,Traits>& ist,
piecewise_constant_distribution& d );
```
_(since C++11)_

## Parameters
- `ost`: output stream to insert the data to
- `ist`: input stream to extract the data from
- `d`: pseudo-random number distribution

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3519 | C++11 | the form of insertion and extraction operators were unspecified(could be hidden friends or out-of-class function templates) | specified to be hidden friends |
