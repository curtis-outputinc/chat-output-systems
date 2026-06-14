-- =============================================
-- Leads: add contacted_at column for the dashboard's bulk-contact-marking feature
-- =============================================
-- NULL = the operator has not reached out to this lead yet
-- non-NULL = timestamp when the operator marked them as contacted
--
-- Toggling on/off is handled by /api/admin/leads/contact (POST). The leads
-- page renders a "Mark contacted" / "Mark not contacted" bulk action bar that
-- writes here.

alter table leads add column if not exists contacted_at timestamptz;

create index if not exists leads_contacted_idx on leads(tenant_id, contacted_at);
create index if not exists leads_contacted_null_idx on leads(tenant_id) where contacted_at is null;
