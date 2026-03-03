---
title: "C++ named requirements: UniformRandomBitGenerator (since C++11)"
source_path: "cpp/named_req/UniformRandomBitGenerator"
category: "named_req"
since: "C++11"
---

A uniform random bit generator is a function object returning unsigned integer values such that each value in the range of possible results has (ideally) equal probability.

## Notes
All [RandomNumberEngines](/cpp/named_req/randomnumberengine/) satisfy this requirement.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2154(P0898R3) | C++11 | it was unclear whether G::min() and G::max()are required to be constant expressions[1] | required |

## See also
- [uniform_random_bit_generator](/cpp/numeric/random/uniformrandombitgenerator/)
