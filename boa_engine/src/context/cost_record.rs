/// The cost record of the context.
use crate::vm::{opcode_cu::as_cost, Opcode};

/// The cost record of the context.
#[derive(Debug, Copy, Clone)]
pub struct CostRecord {
    /// The cost of the vm.
    pub cu_cost: u64,
    pub(crate) cu_cost_all: u64,
    pub(crate) is_limit_cu: bool,
    pub(crate) cu_limit: u64,
}

impl Default for CostRecord {
    fn default() -> Self {
        Self {
            cu_cost: 0,
            cu_cost_all: 0,
            is_limit_cu: false,
            cu_limit: 0,
        }
    }
}

impl CostRecord {
    /// set cu limit
    pub fn set_cu_limit(&mut self, cu_limit: u64) {
        self.cu_limit = cu_limit;
    }
    /// reset cu cost
    pub fn reset_cu_cost(&mut self) {
        self.cu_cost = 0;
    }
    /// set to use cu limit
    pub fn set_use_cu_limit(&mut self) {
        self.is_limit_cu = true;
    }
    /// set to not use cu limit
    pub fn set_not_use_cu_limit(&mut self) {
        self.is_limit_cu = false;
    }
    pub(crate) fn run_opcode(&mut self, opcode: Opcode) -> bool {
        let cost = as_cost(opcode);
        self.cu_cost += cost;
        self.cu_cost_all += cost;
        if self.is_limit_cu {
            return self.cu_cost_all <= self.cu_limit;
        }
        true
    }
}
